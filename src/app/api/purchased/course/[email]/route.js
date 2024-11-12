import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const { email } = params;

  if (!email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const purchasedCourses = await Payment.aggregate([
      { $match: { user_email: email, status: "success" } },
      {
        $set: {
          course_id: { $toObjectId: "$course_id" },
        },
      },
      {
        $lookup: {
          from: "courses", // Name of the `Course` collection
          localField: "course_id",
          foreignField: "_id",
          as: "course",
        },
      },
      { $unwind: "$course" }, // Flatten the course details array
      {
        $project: {
          course: 1,
        },
      },
    ]);
    return NextResponse.json({ success: true, data: purchasedCourses });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
