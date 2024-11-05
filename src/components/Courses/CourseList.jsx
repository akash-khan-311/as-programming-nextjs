import { getCourses } from "@/courseData";
import CourseCard from "../Shared/CourseCard";

const CourseList = () => {
  const courses = getCourses();
  return (
    <>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course._id} data={course} />
        ))}
      </div> */}
    </>
  );
};
export default CourseList;
