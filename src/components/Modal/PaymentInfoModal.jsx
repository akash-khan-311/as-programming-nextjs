"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

const PaymentInfoModal = ({ setIsOpen, isOpen, user, course }) => {
  const router = useRouter();

  const calculateTax = (amount) => {
    const taxRate = 10 / 1000;
    const taxFee = amount * taxRate;
    return Math.floor(taxFee);
  };

  const tax = calculateTax(course.price);
  const totalPrice = course.price + tax;
  const handlePayNow = () => {
    if (!router || !router.push) {
      console.error("router is not defined or router.push is not a function");
      return;
    }
    const serializedCourse = JSON.stringify(course);
    const serializedUser = JSON.stringify(user);
    const queryParams = new URLSearchParams({
      course: serializedCourse, // Ensure course is serialized
      tax: tax.toString(), // Ensure tax is a string
      totalPrice: totalPrice.toString(), // Ensure totalPrice is a string
      user: serializedUser, // Ensure user is serialized
    });

    router.push(`/checkout?${queryParams.toString()}`);
    setIsOpen(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full h-full max-w-md transform overflow-hidden rounded-2xl backdrop-blur-2xl bg-black/70 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl md:text-3xl lg:text-4xl font-medium text-center leading-6 text-white"
                >
                  Payment Info
                </DialogTitle>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-center text-white">
                  {course?.title}
                </h3>
                <div className="mt-4 w-full">
                  <div className="border-b-2 border-gray-200 ">
                    <p className="flex justify-between items-center text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      <span>Price:</span> <span>{course?.price} BDT</span>
                    </p>
                    <p className="flex justify-between items-center text-lg md:text-xl lg:text-2xl font-semibold text-white">
                      <span>Tax :</span> <span>{tax} BDT</span>
                    </p>
                  </div>
                  <p className="flex justify-between items-center text-lg md:text-xl lg:text-2xl font-semibold text-white">
                    <span>Total Amount:</span> <span>{totalPrice} BDT</span>
                  </p>
                </div>

                <div className="flex mt-2 justify-center gap-5">
                  <button
                    type="button"
                    className="btn mt-10 text-white w-full justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  focus-visible:ring-offset-2"
                    onClick={handlePayNow}
                  >
                    Pay Now
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default PaymentInfoModal;
