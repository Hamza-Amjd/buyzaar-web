import { useClerk } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const clerk=useClerk()
    try {
        const { idToken } = await req.json();
        console.log(idToken)
            const signInOrUp = await clerk.authenticateWithGoogleOneTap({  token: idToken })
            // Set the session as active, and handle any navigation or redirects
            const data=await clerk.handleGoogleOneTapCallback(
              signInOrUp,
              { redirectUrl: '/(tabs)' }
            )

          return NextResponse.json({ success: 'Google Sign In Successful',data }, { status: 200 });
  

    } catch (error:any) {
      console.error('Failed to sign in with Google', error.errors);
      return NextResponse.json({ error: 'Failed ' }, { status: 500 });
    }
  }