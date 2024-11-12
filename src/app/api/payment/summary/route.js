import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();
  try {
    const summary = await Payment.aggregate([
      {
        $facet: {
          totalRevenue: [
            { $match: { status: "success" } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
          ],
          totalTransactions: [
            { $match: { status: "success" } },
            { $count: "count" },
          ],
          pendingPayments: [
            { $match: { status: "pending" } },
            { $count: "count" },
          ],
          failedPayments: [
            { $match: { status: "failed" } },
            { $count: "count" },
          ],
        },
      },
      {
        $project: {
          totalRevenue: { $arrayElemAt: ["$totalRevenue.total", 0] },
          totalTransactions: { $arrayElemAt: ["$totalTransactions.count", 0] },
          pendingPayments: { $arrayElemAt: ["$pendingPayments.count", 0] },
          failedPayments: { $arrayElemAt: ["$failedPayments.count", 0] },
        },
      },
    ]);
    const data = summary[0] || {};

    return NextResponse.json({
      success: true,
      totalRevenue: data.totalRevenue || 0,
      totalTransactions: data.totalTransactions || 0,
      pendingPayments: data.pendingPayments || 0,
      failedPayments: data.failedPayments || 0,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
