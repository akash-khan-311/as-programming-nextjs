import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json({ message: "Course not found", status: 404 });
    }
    return NextResponse.json({ success: true, course });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
