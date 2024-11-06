"use client";
import { Link } from "lucide-react";
import CourseManageRow from "../TableRows/CourseManageRow";

const ManageCoursesIns = ({ courses }) => {
  const handleDeleteCourse = (id) => {
    console.log("this is course id:", id);
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {courses.length ? (
                <table className="min-w-full leading-normal">
                  <thead className="border-b backdrop-blur-lg bg-white/20">
                    <tr>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Course
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Level
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Update
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="backdrop-blur-sm bg-white/10 divide-y divide-gray-200">
                    {courses.map((course) => (
                      <CourseManageRow
                        key={course._id}
                        course={course}
                        handleDeleteCourse={handleDeleteCourse}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="min-h-[calc(100vh-268px)] flex justify-center items-center flex-col">
                  <h1 className="text-3xl text-white  md:text-4xl lg:text-5xl  text-center py-4">
                    You have not added any courses yet. Please add a course to
                    manage it.
                  </h1>
                  <Link
                    href={"/dashboard/add-course"}
                    className="text-white bg-pink-600 px-4 py-2 flex items-center justify-center w-52 mx-auto rounded-full"
                  >
                    Add Course
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageCoursesIns;
