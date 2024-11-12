import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();
  try {
    const courses = await Course.find({
      level: "Beginner",
      status: "approved",
    });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching courses" },
      { status: 500 }
    );
  }
}
