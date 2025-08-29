import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();
    console.log("Recieved data : ", { firstName, lastName, email, password });
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
