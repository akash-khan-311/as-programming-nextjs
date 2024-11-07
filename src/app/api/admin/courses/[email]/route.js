import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const { email } = params;

  try {
    if (!email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (user.role !== "admin") {
      return NextResponse.json({ message: "Role not found" }, { status: 403 });
    }
    const courses = await Course.find();
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { message: "Error fetching courses" },
      { status: 500 }
    );
  }
}
