import CourseDetails from "@/components/Courses/CourseDetails";
import { getCourseById } from "@/courseData";
import { getSingleCourse } from "@/lib";

const CourseDetailsPage = async ({ params: { id } }) => {
  // const course = await getSingleCourse(id);
  const res = await fetch(`http://localhost:3000/api/course/${id}`);
  const data = await res.json();
  const course = data.course;

  if (!course) {
    return (
      <>
        <h1 className=" h-[calc(100vh-350px)] flex justify-center items-center text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center">
          Course not found
        </h1>
      </>
    );
  }
  return (
    <>
      <CourseDetails course={course} />
    </>
  );
};
export default CourseDetailsPage;
