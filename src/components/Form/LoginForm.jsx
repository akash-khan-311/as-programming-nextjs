"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import { doCredentialLogin } from "@/app/actions";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");

  const callbackUrl = searchParams.get("callbackUrl") || "/";
  console.log(callbackUrl);

  const message = searchParams.get("message");
  console.log("This is messge from middleware", message);
  useEffect(() => {
    if (message) {
      toast.success(message);
      router.push(callbackUrl);
    }
  }, [callbackUrl, message, router, searchParams]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const response = await doCredentialLogin(formData);
      console.log(response);
      if (!!response.error) {
        toast.error(response.error);
        setError(response.error);
        return;
      } else {
        toast.success("Login Successful");
        router.push(callbackUrl);
      }
    } catch (error) {
      toast.error("check email and password");
      console.log(error);
      setError("check email and password");
    } finally {
      setLoading(false);
      setError("");
    }
  };
  return (
    <>
      <p className="text-red-700 my-5">{error}</p>
      <form
        onSubmit={handleLoginSubmit}
        className="space-y-4 md:space-y-6"
        action="#"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="backdrop-blur-2xl bg-white/30 outline-none text-white placeholder:text-white rounded-lg  block w-full p-2.5 "
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="backdrop-blur-2xl bg-white/30 outline-none text-white placeholder:text-white rounded-lg  block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-blue-400 hover:underline "
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-pink-700 w-full text-white py-3 rounded-md hover:bg-pink-500 transition-all duration-200"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-sm font-light text-gray-200">
          Don’t have an account yet?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register
          </Link>
        </p>
      </form>
      <SocialLogin />
    </>
  );
};
export default LoginForm;
