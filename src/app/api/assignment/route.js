import dbConnect from "@/lib/dbConnect";
import Assignment from "@/models/Assignments";
import moment from "moment";

import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const assignmentData = await req.json();
  const { assignmentId, studentEmail } = assignmentData;

  const today = moment().startOf("day").toDate();

  try {
    const existingAssignment = await Assignment.findOne({
      assignmentId,
      studentEmail,
      createdAt: { $gte: today },
    });

    if (existingAssignment) {
      return NextResponse.json(
        { success: false },
        { message: "Assignment already submitted" },
        { status: 409 }
      );
    }
    const newAssignment = new Assignment({
      ...assignmentData,
      createdAt: new Date(),
    });

    await newAssignment.save();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error creating assignment:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
