import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const session = await auth();
  const tran_id = `txn_${Math.floor(
    10000000 + Math.random() * 90000000
  ).toString()}`;
  const sslCommerzUrl = "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";

  const {
    course_id,
    amount,
    cus_name,
    cus_phone,
    cus_email,
    cus_add1,
    cus_city,
    product_name,
    product_category,
  } = await req.json();

  const store_id = process.env.SSLCOMMERZ_STORE_ID;
  const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD;

  if (!store_id || !store_passwd) {
    return NextResponse.json(
      {
        message: "Store ID or password missing in environment variables",
      },
      { status: 500 }
    );
  }

  const user = await User.findOne({ email: session.user.email });
  console.log("this is user from payment api:", course_id);

  // Construct the payload using URLSearchParams for URL-encoded format
  const payload = new URLSearchParams({
    store_id,
    store_passwd,
    total_amount: amount.toString(),
    currency: "BDT",
    tran_id,
    success_url: `http://localhost:3000/api/payment/success?tran_id=${tran_id}&user_id=${user._id.toString()}&amount=${amount}&course_id=${course_id}`,
    fail_url: `http://localhost:3000/api/payment/fail?tran_id=${tran_id}`,
    cancel_url: `http://localhost:3000/api/payment/cancel?tran_id=${tran_id}`,
    ipn_url: "http://localhost:3000/api/payment/ipn",
    cus_name,
    cus_email,
    cus_phone,
    cus_add1,
    cus_city,
    cus_country: "Bangladesh",
    product_name,
    product_category,
    shipping_method: "NO",
    num_of_item: "1",
    product_profile: "general",
  });

  try {
    const response = await fetch(sslCommerzUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });

    const data = await response.json();

    if (data.status === "SUCCESS") {
      return NextResponse.json({ paymentUrl: data.GatewayPageURL });
    } else {
      return NextResponse.json(
        {
          message: "Payment initiation failed",
          error: data.failedreason || data,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error initiating payment:", error);
    return NextResponse.json(
      {
        message: "Error initiating payment",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
