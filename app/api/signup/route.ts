import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();
    console.log("Recieved data : ", { firstName, lastName, email, password });

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    await User.create({ firstName, lastName, email, password });

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "failed to create user." },
      { status: 500 }
    );
  }
}
