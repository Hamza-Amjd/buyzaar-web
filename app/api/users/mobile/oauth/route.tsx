import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { id_token } = await req.json();

  
        return NextResponse.json({ message: 'Address added successfully'});
    } catch (error) {
      return NextResponse.json({ error: 'Failed to add address' }, { status: 500 });
    }
  }