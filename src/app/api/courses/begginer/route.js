import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();
  try {
    const courses = await Course.find({ level: "Beginner" });
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { message: "Error fetching courses" },
      { status: 500 }
    );
  }
}
