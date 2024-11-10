import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await dbConnect();
  const searchParams = req.nextUrl.searchParams;
  const tran_id = searchParams.get("tran_id");
  const course_id = searchParams.get("course_id");
  const amountStr = searchParams.get("amount");
  const amount = parseFloat(amountStr);
  const user_id = searchParams.get("user_id");

  if (!tran_id || !course_id || !user_id || !amount) {
    return new Response(
      JSON.stringify({ message: "Missing required parameters" }),
      { status: 400 }
    );
  }

  const paymentDetails = new Payment({
    tran_id: tran_id,
    course: course_id, // Match with schema field name
    user: user_id, // Match with schema field name
    amount: amount,
    status: "failed", // Payment status is 'failed'
    date: new Date(),
  });

  try {
    await paymentDetails.save();
  } catch (error) {
    console.error("Error saving payment failure details:", error);
    return new Response(
      JSON.stringify({ message: "Error saving payment failure" }),
      { status: 500 }
    );
  }
  return NextResponse.redirect(
    new URL`/payment/fail?tran_id=${tran_id}`(),
    req.url
  ).status(302);
}
