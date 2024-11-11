import Assignment from "@/models/Assignments";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { email } = params;

  if (!email) {
    console.log("Email is required");
    return NextResponse.json(
      { success: false },
      { error: "Email is required" },
      { status: 400 }
    );
  }

  try {
    const assignments = await Assignment.find({ instructorEmail: email });
    console.log("this is assignments", assignments);
    if (!assignments) {
      console.log("No assignments found for this student");
      return NextResponse.json({ success: true, data: [] });
    }
    console.log("this is assignments", assignments);
    return NextResponse.json({ success: true, data: assignments });
  } catch (error) {
    console.error("Error fetching assignments:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
