import dbConnect from "@/lib/dbConnect";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const course = await Course.findByIdAndUpdate(
      id,
      { status: "approved" },
      { new: true }
    );

    if (!course) {
      return NextResponse.json({ message: "Course not found", status: 404 });
    }
    return NextResponse.json({
      success: true,
      message: "Course approved",
      course,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
