"use client";
import { useForm } from "react-hook-form";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Field from "../Shared/Form/Field";
import { updateAssignment } from "@/lib";
import { useState } from "react";
import toast from "react-hot-toast";
const Modal = ({ assignment, isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (formData) => {
    const { mark, feedback } = formData;
    setLoading(true);
    try {
      const data = await updateAssignment(assignment._id, {
        mark,
        feedback,
      });
      if (data.success) {
        setIsOpen(false);
        toast.success("Assignment updated successfully ❤️");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className={`z-[999] fixed flex items-center justify-center h-screen w-screen place-items-center ${
        isOpen ? "visible opacity-1" : "invisible opacity-0"
      } inset-0 bg-black bg-opacity-60 duration-100 `}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/20 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h2"
              className="text-2xl font-medium border-b pb-2 text-white"
            >
              {assignment.courseName}
            </DialogTitle>
            <div>
              <div className="text-white">
                <span className="font-semibold">Live Link : </span>
                <span className="border-b">
                  {assignment.assignment.liveLink}
                </span>
              </div>
              <div className="text-white">
                <span className="font-semibold">Code Link : </span>
                <span className="border-b">
                  {assignment.assignment.liveLink}
                </span>
              </div>
              <div className="text-white">
                <span className="font-semibold">Code Link : </span>
                <span className="border-b">
                  {assignment.assignment.serverCodeLink === ""
                    ? " "
                    : assignment.assignment.serverCodeLink}
                </span>
              </div>
            </div>
            <form
              className="space-y-3 my-5"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <Field required={true} label="Mark" error={errors.mark}>
                <input
                  {...register("mark", {
                    required: "Mark is Required",
                    max: {
                      value: 60,
                      message: "Mark Must be less than 60 characters",
                    },
                  })}
                  type="number"
                  name="mark"
                  id="mark"
                  placeholder="exp: 50"
                  className={`backdrop-blur-sm ${
                    !!errors.mark ? "border-red-500" : "border-white "
                  } bg-white/10 border   sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                  `}
                />
              </Field>
              <Field required={true} label="Feedback" error={errors.feedback}>
                <textarea
                  {...register("feedback", {
                    required: "Feedback is Required",
                    minLength: {
                      value: 20,
                      message: "Feedback must be at least 20 characters",
                    },
                  })}
                  name="feedback"
                  id="feedback"
                  rows={5}
                  className={`backdrop-blur-sm ${
                    !!errors.feedback ? "border-red-500" : "border-white "
                  } bg-white/10 border   sm:text-sm rounded-lg my-2 focus:outline-none block w-full p-2.5   text-white "
                  `}
                />
              </Field>
              <div className="mt-4 flex justify-between items-center">
                <Button
                  type="submit"
                  className="inline-flex  justify-end items-center gap-2 rounded-md bg-green-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner "
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
                <Button
                  className="inline-flex  justify-end items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner "
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default Modal;
