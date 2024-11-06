import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  if (!params.email) {
    return NextResponse.json({ message: "Email parameter is missing" });
  }
  const { email } = params;
  await dbConnect();
  try {
    // const { role } = req.body;
    const data = await req.json();

    const { role } = data;

    console.log("this is role", role);
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    } else {
      return NextResponse.json({ success: true, user: updatedUser });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
