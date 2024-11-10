"use client";

import useRole from "@/hooks/useRole";
import { addToCart } from "@/lib";
import { useState } from "react";
import toast from "react-hot-toast";
import PaymentInfoModal from "../Modal/PaymentInfoModal";

const HandleBuyNow = ({ user, course }) => {
  const [role, loading] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (id) => {
    setIsOpen(true);
    console.log(isOpen);
  };
  return (
    <>
      <button
        onClick={() => handleModal(course._id)}
        className="select-none mt-4 disabled:bg-gray-500 disabled:cursor-not-allowed text-sm md:text-lg lg:text-xl w-full capitalize rounded-lg bg-pink-500 py-2 lg:py-3 px-6 text-center align-middle font-sans font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40  focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Buy Now
      </button>
      <PaymentInfoModal
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        course={course}
      />
    </>
  );
};
export default HandleBuyNow;
