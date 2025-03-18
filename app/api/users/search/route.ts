import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await connectToDB()

    const user = await User.findOne({ clerkId: userId })

    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    const { query } = await req.json()

    if (!query) {
      return new NextResponse("query required", { status: 400 })
    }
      const isStored = user.searchHistory.find((q: string) => q == query)
      if(isStored){
        return;
      }else{
        user.searchHistory.push(query)
      }

    await user.save()
    
    return NextResponse.json(user.searchHistory, { status: 200 })
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
