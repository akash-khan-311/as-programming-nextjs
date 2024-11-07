"use client";
import { updateCourseStatus } from "@/lib";
import AdminCourseManage from "../TableRows/AdminCourseManage";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ManageCoursesAd = ({ courses, authUser }) => {
  const router = useRouter();
  const handleChangeStatus = async (id) => {
    try {
      if (!authUser) {
        router.push("/");
      }
      const result = await updateCourseStatus(id);
      console.log(result);
      if (result.success) {
        toast.success(result.message, "❤️");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {courses.length ? (
                <table className="min-w-full leading-normal">
                  <thead className="backdrop-blur-lg bg-white/20">
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Course Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Level
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        category
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        price
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        duration
                      </th>

                      <th
                        scope="col"
                        className="px-5  py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        actions
                      </th>
                      <th
                        scope="col"
                        className="px-5  py-3 text-white  border-b border-gray-200 text-left text-sm uppercase font-normal"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="backdrop-blur-sm bg-white/20">
                    {/* User data table row */}
                    {courses &&
                      courses?.map((course) => (
                        <AdminCourseManage
                          handleChangeStatus={handleChangeStatus}
                          key={course?._id}
                          course={course}
                        />
                      ))}
                  </tbody>
                </table>
              ) : (
                <h2 className="text-3xl capitalize md:text-4xl lg:text-5xl flex justify-center items-center text-white min-h-[calc(100vh-200px)]">
                  {courses.message}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageCoursesAd;
