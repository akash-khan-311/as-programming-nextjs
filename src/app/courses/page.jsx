import Container from "@/components/Shared/Container";
import CourseCard from "@/components/Shared/CourseCard";
import { getCourses } from "@/courseData";
import { getUserRole } from "@/lib";

const CoursesPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/courses`);
  const courses = await res.json();

  return (
    <>
      <section className="section">
        <Container>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 text-center  font-bold">
              Explore Our Courses
            </h1>
          </div>

          {/* Courses List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard key={course._id} data={course} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CoursesPage;
