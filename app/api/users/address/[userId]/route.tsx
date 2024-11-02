import { connectToDB } from "@/lib/mongoDB";
import User from "@/lib/models/User";
import { NextResponse, NextRequest  } from "next/server";

export async function GET(req: NextRequest,{ params }: { params: { userId: string } }) {
    try {
      const userId= params.userId;
      if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
      await connectToDB();
  
      const user = await User.findOne({ clerkId: userId });
      if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
      return NextResponse.json({ addresses:user.addresses });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: 'Failed to fetch addresses' }, { status: 500 });
    }
  }
  