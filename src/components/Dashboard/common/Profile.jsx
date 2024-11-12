"use client";

import useRole from "@/hooks/useRole";
import Image from "next/image";
import { useState } from "react";

export default function Profile({ user }) {
  const [editMode, setEditMode] = useState(false);
  const [role, loading] = useRole();

  const handleEditToggle = () => setEditMode(!editMode);

  return (
    <div className="">
      <div className="bg-slate-800 w-full  rounded-lg shadow-lg p-8">
        {/* Profile Header */}
        <div className="flex items-center mb-6 space-x-4">
          <Image
            src={user?.avatar}
            alt={user?.name}
            width={100}
            height={100}
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">{user?.name}</h2>
            <p className="text-gray-500">{role.toUpperCase()}</p>
          </div>
          <button
            onClick={handleEditToggle}
            className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700"
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* Profile Information */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="p-6 bg-slate-500 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-white">
              Personal Information
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-100">Email</span>
                {editMode ? (
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-2/3 p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span className="text-gray-100">{user?.email}</span>
                )}
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-100">Phone</span>
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={user?.phone ? user.phone : "-------"}
                    className="w-2/3 p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span className="text-gray-100">
                    {user?.phone ? user.phone : "-------"}
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-100">Loacation</span>
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={user?.address ? user.address : "-------"}
                    className="w-2/3 p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span className="text-gray-100">
                    {user?.address ? user.address : "-------"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          {editMode && (
            <div className="text-right">
              <button className="bg-green-600 text-white px-5 py-2 rounded-md shadow hover:bg-green-700">
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
