import Assignment from "@/models/Assignments";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  const { id } = params;
  const { mark, feedback } = await req.json();

  try {
    // Convert the id to a MongoDB ObjectId
    const assignmentId = new mongoose.Types.ObjectId(id);
    const updatedAssignment = await Assignment.findOneAndUpdate(
      assignmentId,
      { mark, feedback },
      { new: true }
    );

    if (!updatedAssignment) {
      return NextResponse.json(
        { message: "Assignment not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: updatedAssignment });
  } catch (error) {
    console.error("Error updating assignment:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
