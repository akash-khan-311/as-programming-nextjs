"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("firstName") + " " + formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");
      const user = { name, email, password };

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.status === 201) {
        toast.success("Account created successfully");
        router.push("/login");
      }
      if (res.status === 400) {
        toast.error("User already exists, Please Login");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6"
        action="#"
      >
        <div className="flex justify-between items-center gap-x-10">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium  text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="bg-gray-50 border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 outline-none text-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="Abdullah"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-gray-50 border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 outline-none text-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="Al Mamun"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border text-black  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 outline-none t focus:ring-blue-500 focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 outline-none text-black focus:ring-blue-500 focus:border-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            className="bg-gray-50 border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 outline-none text-black focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-medium text-white hover:underline "
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-pink-700 text-white w-full py-3 rounded-md hover:bg-pink-500 transition-all duration-200"
        >
          Sign Up
        </button>
        <p className="text-sm font-light text-gray-50 ">
          Don’t have an account yet?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:underline text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};
export default SignUpForm;
