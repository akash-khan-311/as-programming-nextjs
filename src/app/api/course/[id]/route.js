import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      console.log("this is id from backend============================>", id);
      return NextResponse.json({ message: "Course not found", status: 404 });
    }
    return NextResponse.json({ success: true, course });
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
