import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";

export async function POST(req) {
  await dbConnect();
  const searchParams = req.nextUrl.searchParams;
  const tran_id = searchParams.get("tran_id");
  const course_id = searchParams.get("course_id");
  const amountStr = searchParams.get("amount");
  const amount = parseFloat(amountStr);
  const user_email = searchParams.get("user_email");

  // Check if required parameters are missing
  if (!tran_id || !course_id || !user_email || !amount) {
    return NextResponse.json(
      { message: "Missing required parameters" },
      { status: 400 }
    );
  }

  try {
    // Create the payment details
    const paymentDetails = new Payment({
      tran_id: tran_id,
      course_id: course_id, // Match with schema field name
      user_email: user_email, // Match with schema field name
      amount: amount,
      status: "success", // Adjust based on payment status
      date: new Date(),
    });

    // Save the payment details to the database
    await Payment.create(paymentDetails);

    return NextResponse.redirect(new URL("/payment/success", req.url), 303);
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing payment" },
      { status: 500 }
    );
  }
}
