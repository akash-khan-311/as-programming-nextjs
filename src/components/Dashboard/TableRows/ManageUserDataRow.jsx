"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import UpdateUserModal from "@/components/Modal/UpdateUserModal";
import { useState } from "react";
import { updatedUserRoles } from "@/lib";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ManageUserDataRow = ({ user, authUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const modalHandler = async (role) => {
    try {
      const data = await updatedUserRoles(user?.email, role);
      console.log(data);
      if (data.success) {
        setIsOpen(false);
        toast.success("Role updated successfully 🙂");
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <>
      <tr>
        <td className=" px-5 py-5 border-b border-gray-200  text-sm">
          <p className="text-white whitespace-no-wrap">
            {user?.email === authUser?.email ? "You" : user?.email}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  text-sm">
          <p className="text-white whitespace-no-wrap uppercase">
            {user?.role}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  text-sm">
          {user?.status ? (
            <p
              className={`${
                user.status === "verified"
                  ? "text-green-300"
                  : "text-yellow-600"
              } whitespace-no-wrap`}
            >
              {user.status.toUpperCase()}
            </p>
          ) : (
            <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
          )}
        </td>

        <td className="px-5 py-5 border-b border-gray-200  text-sm">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            disabled={user.email === authUser.email}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-white leading-tight disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-600 opacity-50 rounded-full"
            ></span>
            <span className="relative ">Update Role</span>
          </button>

          {/* Modal */}
          <UpdateUserModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            user={user}
            modalHandler={modalHandler}
          />
        </td>
      </tr>
    </>
  );
};
export default ManageUserDataRow;
