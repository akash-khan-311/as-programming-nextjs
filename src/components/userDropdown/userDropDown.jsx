"use client";

import Image from "next/image";
import { useState } from "react";
import { doLogOut } from "@/app/actions";
import Link from "next/link";
// import DemoImg from "/images/demo.jpg";
const UserDropDown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen((prev) => !prev);
  };

  console.log(user);
  return (
    <>
      {user && (
        <div className=" relative inline-flex ">
          <Image
            onClick={handleAvatarClick}
            src={user?.avatar || user?.image || "/avatar.jpg"}
            alt={user.name}
            width={200}
            height={200}
            className="rounded-full w-12 h-12 border cursor-pointer"
          />

          <div
            className={`absolute overflow-hidden top-10 -left-32 transition-[opacity,margin] duration-300 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0 invisible"
            }   min-w-60 bg-slate-700 shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700`}
          >
            <div className="py-2 first:pt-0 last:pb-0">
              <Link
                href="/dashboard"
                className={`flex ${
                  isOpen
                    ? "translate-x-0 delay-75 duration-200 transition-all ease-in-out"
                    : "-translate-x-full opacity-0"
                } items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700`}
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                Dashboard
              </Link>
              <a
                className={`flex ${
                  isOpen
                    ? "translate-x-0 delay-100 duration-200 transition-all ease-in-out"
                    : "-translate-x-full opacity-0"
                } items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700`}
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={8} cy={21} r={1} />
                  <circle cx={19} cy={21} r={1} />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                Cart
              </a>

              <button
                onClick={() => doLogOut()}
                className={`flex ${
                  isOpen
                    ? "translate-x-0 delay-200 duration-200 transition-all ease-in-out"
                    : "-translate-x-full opacity-0"
                } items-center gap-x-3.5 py-2 px-3 rounded-lg w-full text-sm text-gray-100 hover:text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700`}
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default UserDropDown;
