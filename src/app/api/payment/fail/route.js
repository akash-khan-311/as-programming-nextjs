import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  const tran_id = searchParams.get("tran_id");
  return NextResponse.redirect(new URL("/payment/fail", req.url), 303);
}
