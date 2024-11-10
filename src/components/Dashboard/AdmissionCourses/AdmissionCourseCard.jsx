"use client";

import Image from "next/image";

const AdmissionCourseCard = ({ courseObj }) => {
  const { course } = courseObj;
  console.log(course);
  return (
    <>
      <div className=" w-full lg:w-3/4  mx-auto"></div>
      <div className="flex flex-col  rounded-lg backdrop-blur-md bg-white/20 text-white min-h-72 xl:flex-row">
        <div className="xl:w-1/3 w-full ">
          <Image
            width={300}
            height={300}
            className="w-full h-full  rounded-t-lg  lg:!rounded-none lg:!rounded-l-lg"
            src={course.img}
            alt={course.title}
          />
        </div>
        <div className="flex justify-center flex-1 flex-col p-6">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold text-blue-gray-900 my-3">
            {course.title}
          </h2>
          <div>
            <p>From now , You can Continue The Course and Submit Assignment</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 my-5">
            <button className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500">
              Continue Course
            </button>
            <button className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500">
              Submit Assignment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdmissionCourseCard;
