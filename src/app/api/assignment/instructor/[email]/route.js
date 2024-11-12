import Assignment from "@/models/Assignments";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { email } = params;

  if (!email) {
    return NextResponse.json(
      { success: false },
      { error: "Email is required" },
      { status: 400 }
    );
  }

  try {
    const assignments = await Assignment.find({ instructorEmail: email });

    if (!assignments) {
      return NextResponse.json({ success: true, data: [] });
    }

    return NextResponse.json({ success: true, data: assignments });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
