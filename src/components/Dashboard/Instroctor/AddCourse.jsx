"use client";
import Field from "@/components/Shared/Form/Field";
import { categories } from "@/data/categories";
import { useForm } from "react-hook-form";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { imageUpload } from "@/lib/uploadImg";
import { useRouter } from "next/navigation";

const AddCourse = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (currentImage) URL.revokeObjectURL(currentImage); // Clean up previous image
      setFile(selectedFile);
      setCurrentImage(URL.createObjectURL(selectedFile));
      setNewImage(selectedFile);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    if (!newImage) {
      toast.error("Please upload an image");
      return;
    }

    setLoading(true);

    try {
      // Upload image
      const courseImageData = await imageUpload(newImage);
      const courseImageURL = courseImageData?.data?.display_url;

      // Construct course object
      const course = {
        title: formData.title,
        description: formData.description,
        img: courseImageURL,
        level: formData.level,
        duration: formData.duration,
        price: formData.price,
        category: formData.category,
        status: "pending",
        instructor: {
          name: user?.name,
          email: user?.email,
        },
      };

      // Save course to backend
      const response = await fetch(`http://localhost:3000/api/savecourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Course Added Successfully 😍");
        reset();
        // setCurrentImage(null);
        // setNewImage(null);
        router.push("/dashboard/my-courses");
      } else {
        toast.error(data.message || "Failed to add course");
      }
    } catch (error) {
      toast.error("Error saving course");
      console.error("Error saving course:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-[calc(100vh-40px)] md:flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 text-gray-800 rounded-xl backdrop-blur-sm bg-white/10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Add Your Course
        </h1>
        <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2">
            <div className="space-y-5">
              <Field
                required={true}
                label={"Title"}
                error={errors.title}
                htmlFor={"title"}
              >
                <input
                  {...register("title", { required: "Title is Required" })}
                  name="title"
                  type="text"
                  id="title"
                  placeholder="Course Title"
                  className={`${
                    errors.title ? "border-red-500" : "border-white"
                  } w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white`}
                />
              </Field>
              <Field
                label={"Course Category"}
                htmlFor={"category"}
                required={true}
                error={errors.category}
              >
                <select
                  {...register("category", {
                    required: "Category is Required",
                  })}
                  className="w-full text-white px-4 py-3 border focus:outline-none rounded-md backdrop-blur-xl bg-white/30"
                  name="category"
                  id="category"
                >
                  <option value="">Select a Category</option>
                  {categories.map((category) => (
                    <option
                      className="text-black"
                      value={category.label}
                      key={category.label}
                    >
                      {category.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label={"Course Level"}
                htmlFor={"level"}
                required={true}
                error={errors.level}
              >
                <select
                  {...register("level", { required: "Level is Required" })}
                  className="w-full text-white px-4 py-3 border focus:outline-none rounded-md backdrop-blur-xl bg-white/30"
                  name="level"
                  id="level"
                >
                  <option className="text-black" value="">
                    Select a level
                  </option>
                  <option className="text-black" value="Beginner">
                    Beginner
                  </option>
                  <option className="text-black" value="Intermediate">
                    Intermediate
                  </option>
                  <option className="text-black" value="Advanced">
                    Advanced
                  </option>
                </select>
              </Field>
            </div>
            <div className="space-y-5">
              <Field
                label={"Course Image"}
                required={true}
                error={errors.image}
              >
                <div
                  className={`${
                    errors.image ? "border-red-500" : "border-white"
                  } p-7 border backdrop-blur-xl bg-white/30 w-full m-auto rounded-lg`}
                >
                  <div className="file_upload p-[17px] relative border-4 border-dotted border-gray-300 rounded-lg">
                    <div className="flex flex-col  mx-auto text-center">
                      <label>
                        <input
                          {...register("image")}
                          className="text-sm cursor-pointer w-full py-20 hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                          onChange={handleChange}
                        />

                        <div className="bg-pink-700 w-full text-white border border-pink-300 rounded font-semibold cursor-pointer  hover:bg-pink-800">
                          {!currentImage && "Upload Image"}
                          {(file || currentImage) && (
                            <Image
                              src={currentImage}
                              width={500}
                              height={500}
                              alt="Course Image Preview"
                              className="w-full md:h-56"
                            />
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </Field>
              <div className="md:flex flex-col md:flex-row justify-center md:gap-x-10 items-center">
                <Field
                  required={true}
                  label={"Course Price (BDT)"}
                  error={errors.price}
                  htmlFor={"price"}
                >
                  <input
                    {...register("price", {
                      required: "Course Price is Required",
                      valueAsNumber: true,
                      min: {
                        value: 100,
                        message: "Price must be greater than 100",
                      },
                    })}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      appearance: "textfield",
                    }}
                    name="price"
                    type="number"
                    id="price"
                    placeholder="Ex: 2000"
                    className="w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                  />
                </Field>
                <Field
                  required={true}
                  label={"Duration (months)"}
                  error={errors.duration}
                  htmlFor={"duration"}
                >
                  <input
                    {...register("duration", {
                      required: "Duration is Required",
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Duration must be greater than 0",
                      },
                    })}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      appearance: "textfield",
                    }}
                    name="duration"
                    type="number"
                    id="duration"
                    placeholder="Ex: 6"
                    className="w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white"
                  />
                </Field>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Field
              label={"Description"}
              htmlFor={"description"}
              required={true}
              error={errors.description}
            >
              <textarea
                {...register("description", {
                  required: "Description is Required",
                  minLength: {
                    value: 150,
                    message: "Description must be at least 150 characters",
                  },
                })}
                id="description"
                className={`${
                  errors.description ? "border-red-500" : "border-white"
                } block  focus:rose-300 h-32  w-full px-4 py-3 text-white border focus:outline-none rounded-md backdrop-blur-xl bg-white/30 placeholder:text-white`}
                name="description"
                placeholder="Enter About Your Course"
              ></textarea>
            </Field>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-pink-700 hover:bg-pink-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </>
  );
};
export default AddCourse;
