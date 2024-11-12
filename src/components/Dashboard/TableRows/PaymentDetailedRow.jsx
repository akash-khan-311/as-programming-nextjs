"use client";
import { convertTimestampToDate } from "@/lib";
import Image from "next/image";

const PaymentDetailedRow = ({ payment }) => {
  const formattedDate = convertTimestampToDate(payment.date);
  console.log(payment);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">{payment.tran_id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative"></div>
          </div>
          <div className="ml-3">
            <p className="text-white whitespace-no-wrap ">
              {payment.courseDetails.title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {payment.amount} BDT
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {payment.status}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <p className="text-white whitespace-no-wrap text-center">
          {formattedDate}
        </p>
      </td>
    </tr>
  );
};
export default PaymentDetailedRow;
