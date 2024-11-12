import CourseDetails from "@/components/Courses/CourseDetails";
import { getCourseById } from "@/courseData";
import { getSingleCourse } from "@/lib";
export const metadata = {
  title: "Course Details | AS Programming",
  description:
    "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",
  keywords:
    "AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning",
  author: "Md Akash Khan",
  openGraph: {
    type: "website",
    url: "https://as-programming-next.netlify.app",
    title: "AS Programming - Learn and Master IT Skills",
    description:
      "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",

    site_name: "AS Programming",
  },
};
const CourseDetailsPage = async ({ params: { id } }) => {
  // const course = await getSingleCourse(id);
  const res = await fetch(
    `https://as-programming-next.netlify.app/api/course/${id}`
  );
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
