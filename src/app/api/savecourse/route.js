import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";

import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  try {
    // Await the promise to resolve and get the JSON data
    const courseData = await req.json();

    // Log the received course data to verify it

    const newCourse = new Course(courseData);
    await newCourse.save();
    return NextResponse.json({ success: true, course: newCourse });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.keys(error.errors).map((key) => {
        return `${key}: ${error.errors[key].message}`;
      });
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationErrors,
        },
        { status: 400 } // Changed status to 400 for validation errors
      );
    }
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
