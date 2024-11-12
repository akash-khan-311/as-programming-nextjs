import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();
  try {
    const payments = await Payment.aggregate([
      {
        $addFields: {
          courseObjectId: {
            $cond: {
              if: { $eq: [{ $type: "$course_id" }, "string"] },
              then: { $toObjectId: "$course_id" },
              else: "$course_id",
            },
          },
        },
      },
      {
        $lookup: {
          from: "courses",
          localField: "courseObjectId",
          foreignField: "_id",
          as: "courseDetails",
        },
      },
      { $unwind: "$courseDetails" },
      {
        $project: {
          tran_id: 1,
          date: 1,
          amount: 1,
          user_email: 1,
          status: 1,
          "courseDetails.title": 1,
        },
      },
    ]);
    return NextResponse.json({ success: true, data: payments });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
