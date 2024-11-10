"use client";

import { sslCommerzPayment } from "@/lib";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const course = searchParams.get("course")
    ? JSON.parse(searchParams.get("course"))
    : {};
  const tax = searchParams.get("tax");
  const totalPrice = searchParams.get("totalPrice");
  const user = searchParams.get("user")
    ? JSON.parse(searchParams.get("user"))
    : {};
  const [billingInfo, setBillingInfo] = useState({
    name: user.name,
    email: user.email,
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "Bangladesh",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handlePayment = async () => {
    setLoading(true);

    const payload = {
      course_id: course._id,
      amount: parseInt(totalPrice),
      product_name: course.title,
      product_category: course.category,
      cus_name: billingInfo.name,
      cus_email: billingInfo.email,
      cus_phone: billingInfo.phone,
      cus_add1: billingInfo.address,
      cus_city: billingInfo.city,
      cus_zip: billingInfo.zip,
      cus_country: billingInfo.country,
    };

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.paymentUrl) {
        // Redirect to the payment gateway URL
        window.location.href = data.paymentUrl;
      } else {
        alert(`Payment initiation failed: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred while processing your payment.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen  flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-3xl backdrop-blur-xl bg-white/20 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Checkout</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Billing Information */}
            <div>
              <h3 className="text-lg font-medium text-white">
                Billing Information
              </h3>
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-white">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 backdrop-blur-lg bg-black/10 text-white border border-gray-300 rounded-md outline-none "
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none  backdrop-blur-lg bg-black/10 text-white "
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={billingInfo.phone}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none  backdrop-blur-lg bg-black/10 text-white "
                    placeholder="017XXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-white">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={billingInfo.address}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none  backdrop-blur-lg bg-black/10 text-white "
                    placeholder="123 Main St"
                  />
                </div>
                <div>
                  <label className="block text-white">City</label>
                  <input
                    type="text"
                    name="city"
                    value={billingInfo.city}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none  backdrop-blur-lg bg-black/10 text-white "
                    placeholder="Dhaka"
                  />
                </div>
                <div>
                  <label className="block text-white">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={billingInfo.zip}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none  backdrop-blur-lg bg-black/10 text-white "
                    placeholder="1234"
                  />
                </div>
                <div>
                  <label className="block text-white">Country</label>
                  <select
                    name="country"
                    value={billingInfo.country}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none  backdrop-blur-lg bg-black/10 text-white "
                  >
                    <option className="outline-none  backdrop-blur-lg bg-black/10 text-black">
                      Bangladesh
                    </option>
                    <option className="outline-none  backdrop-blur-lg bg-black/10 text-black">
                      India
                    </option>
                    <option className="outline-none  backdrop-blur-lg bg-black/10 text-black">
                      USA
                    </option>
                    <option className="outline-none  backdrop-blur-lg bg-black/10 text-black">
                      UK
                    </option>
                  </select>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="flex flex-col justify-between ">
              <div className="border p-2 rounded-md">
                <Image
                  src={course.img}
                  alt={course.title}
                  width={400}
                  height={400}
                  placeholder="blur"
                  blurDataURL={course.img}
                  className="w-full h-auto rounded-md shadow-md shadow-black/20"
                />
                <h2 className="text-2xl font-semibold text-white mt-4 text-center">
                  {course.title}
                </h2>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  Order Summary
                </h3>
                <div className="space-y-4 mt-4 p-4 border border-gray-300 rounded-md">
                  <div className="flex justify-between text-white">
                    <span>Subtotal</span>
                    <span>৳{course.price}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Tax</span>
                    <span>৳{tax}</span>
                  </div>
                  <div className="flex justify-between text-white font-semibold">
                    <span>Total</span>
                    <span>৳{totalPrice}</span>
                  </div>
                </div>
                <button
                  onClick={handlePayment}
                  className="w-full mt-6 py-3 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                  {loading ? "Processing..." : "Proceed to Payment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
