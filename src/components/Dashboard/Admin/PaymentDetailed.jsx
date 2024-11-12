import { getPaymentDetails } from "@/lib";
import PaymentDetailedRow from "../TableRows/PaymentDetailedRow";

const PaymentDetailed = async () => {
  const data = await getPaymentDetails();
  console.log(data);
  const payments = data.data;
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold  text-white">Payment Information</h2>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {payments.length ? (
                <table className="min-w-full leading-normal ">
                  <thead className="border-b backdrop-blur-lg bg-white/20">
                    <tr>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Transaction id
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        course title
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        amount
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        date
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" backdrop-blur-sm bg-white/10 divide-y divide-gray-200">
                    {payments.map((payment) => (
                      <PaymentDetailedRow payment={payment} key={payment._id} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 className="text-3xl text-white min-h-[calc(100vh-268px)] md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4">
                  You have not added a course yet
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentDetailed;
