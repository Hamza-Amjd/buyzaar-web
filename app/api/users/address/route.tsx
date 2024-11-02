import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from "@/lib/mongoDB";
import User from "@/lib/models/User";

// Add new address
export async function POST(req: Request) {
  try {
    const { userId,  address } = await req.json();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDB();

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: userId },
      { $push: { addresses: address } },
      { new: true }
    );

    return NextResponse.json({ message: 'Address added successfully', user: updatedUser });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add address' }, { status: 500 });
  }
}

// Update address
export async function PUT(req: Request) {
  try {
    const { userId, addressId, updatedAddress  } = await req.json();
    console.log(updatedAddress,addressId,userId)
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDB();

    const updatedUser = await User.findOneAndUpdate(
      { 
        clerkId: userId,
        'addresses._id': addressId 
      },
      { 
        $set: { 'addresses.$': updatedAddress }
      },
      { new: true }
    );

    return NextResponse.json({ message: 'Address updated successfully', user: updatedUser });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update address' }, { status: 500 });
  }
}

// Delete address
export async function DELETE(req: Request) {
  try {
    const { userId,addressId } = await req.json();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDB();

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: userId },
      { $pull: { addresses: { _id: addressId } } },
      { new: true }
    );

    return NextResponse.json({ message: 'Address deleted successfully', user: updatedUser });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete address' }, { status: 500 });
  }
}
