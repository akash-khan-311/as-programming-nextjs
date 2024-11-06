import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { email } = params;
  await dbConnect();

  try {
    const courses = await Course.find({ "instructor.email": email });

    if (courses.length < 1) {
      return NextResponse.json({
        message: "No courses found for this instructor",
        status: 404,
      });
    }
    return NextResponse.json({ success: true, courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json({
      success: false,
      message: error.message,
      status: 500,
    });
  }
}
