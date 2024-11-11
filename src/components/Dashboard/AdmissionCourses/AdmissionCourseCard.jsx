"use client";

import Field from "@/components/Shared/Form/Field";
import { saveAssignment } from "@/lib";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AdmissionCourseCard = ({ courseObj, user }) => {
  const { course } = courseObj;
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    try {
      setLoading(true);
      console.log(formData);
      const assignmentData = {
        assignment: {
          liveLink: formData.live,
          codeLink: formData.code,
          serverCodeLink: formData.server,
        },
        instructorEmail: course.instructor.email,
        courseName: course.title,
        courseImg: course.img,
        assignmentId: course._id,
        studentName: user.name,
        studentEmail: user?.email,
        instructorName: course.instructor.name,
        instructorEmail: course.instructor.email,
        mark: "pending",
        feedback: "comming soon",
      };
      // Make API call to submit assignment
      const data = await saveAssignment(assignmentData);
      if (data.success) {
        toast.success("Assignment submitted successfully ❤️");
        setIsOpen(false);
        reset();
      }
    } catch (error) {
      toast.error("Failed to submit assignment ��");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className=" w-full lg:w-3/4  mx-auto">
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
              <p>
                From now , You can Continue The Course and Submit Assignment
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 my-5">
              <button className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500">
                Continue Course
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="w-full transition-all duration-200 bg-pink-600 px-10 py-2 rounded-lg hover:bg-pink-500"
              >
                Submit Assignment
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className={`z-[999] fixed flex items-center justify-center h-screen mx-3 place-items-center ${
            isOpen ? "visible opacity-1" : "invisible opacity-0"
          } inset-0 bg-black bg-opacity-60 duration-100 `}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute m-4 md:w-2/3 lg:w-2/4 mx-auto w-full rounded-lg backdrop-blur-3xl bg-white/30 text-white font-sans text-base font-lightd  ${
              isOpen
                ? "translate-y-6 opacity-1 duration-300"
                : "-translate-y-6 opacity-0 duration-200"
            } shadow-2xl`}
          >
            <div className="flex items-center p-4 font-sans text-xl  md:text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              {course.title}
            </div>

            <form className="p-5" onSubmit={handleSubmit(submitForm)} action="">
              <Field
                required={true}
                label="Website Live Link"
                error={errors.live}
              >
                <input
                  {...register("live", {
                    required: "Field is Required",
                  })}
                  type="text"
                  name="live"
                  id="live"
                  placeholder="Paste The Live URL Here"
                  className={`backdrop-blur-sm ${
                    !!errors.live ? "border-red-500" : "border-white "
                  } bg-white/10 border  placeholder:text-white sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                    `}
                />
              </Field>
              <Field
                required={true}
                label="Github Code Link"
                error={errors.code}
              >
                <input
                  {...register("code", {
                    required: "Code Link is Required",
                  })}
                  type="text"
                  name="code"
                  id="code"
                  placeholder="Paste The Code URL Here"
                  className={`backdrop-blur-sm ${
                    !!errors.code ? "border-red-500" : "border-white "
                  } bg-white/10 border  placeholder:text-white sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                    `}
                />
              </Field>
              <Field label="Github Server Side Code Link">
                <input
                  {...register("server")}
                  type="text"
                  name="server"
                  id="server"
                  placeholder="Paste The Server Side URL Here"
                  className={`backdrop-blur-sm 
                  border-white 
                 bg-white/10 border  placeholder:text-white sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                    `}
                />
              </Field>
              <div role="alert" className="text-red-500"></div>
              <button
                className="bg-pink-600 hover:bg-pink-500 w-2/3 mx-auto flex justify-center items-center rounded-lg py-2 mb-10 mt-3"
                type="submit"
              >
                {loading ? "Sumiting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdmissionCourseCard;
