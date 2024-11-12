import { getPaymentSummary } from "@/lib";

const PaymentSummary = async () => {
  const data = await getPaymentSummary();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Total Revenue */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">
            ৳ {data.totalRevenue}
          </p>
          <p className="text-sm text-gray-500">All successful payments</p>
        </div>
        {/* Total Transactions */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Transactions
          </h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">
            {data.totalTransactions}
          </p>
          <p className="text-sm text-gray-500">Completed transactions</p>
        </div>
        {/* Pending Payments */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-700">
            Pending Payments
          </h3>
          <p className="mt-2 text-3xl font-bold text-yellow-600">
            {data.pendingPayments}
          </p>
          <p className="text-sm text-gray-500">
            Payments awaiting confirmation
          </p>
        </div>
        {/* Failed Payments */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-700">
            Failed Payments
          </h3>
          <p className="mt-2 text-3xl font-bold text-red-600">
            {data.failedPayments}
          </p>
          <p className="text-sm text-gray-500">Failed transaction attempts</p>
        </div>
      </div>
    </>
  );
};
export default PaymentSummary;
