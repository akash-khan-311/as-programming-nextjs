import Container from "@/components/Shared/Container";
import CourseCard from "@/components/Shared/CourseCard";
import { getCourses } from "@/courseData";
import { getUserRole } from "@/lib";
import { revalidatePath } from "next/cache";
import { HoverEffect } from "@/components/ui/card-hover-effect";
const CoursesPage = async () => {
  const res = await fetch(
    `http://localhost:3000/api/courses`,
    {
      cache: "no-store",
    },
    { revalidatePath: "/courses" }
  );
  const courses = await res.json();

  return (
    <>
      <section className="section">
        <Container>
          {courses.length ? (
            <>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 text-center  font-bold">
                  Explore Our Courses
                </h1>
              </div>

              {/* Courses List */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                {courses.map((course) => (
                  <CourseCard key={course._id} data={course} />
                ))}
              </div> */}
              <HoverEffect items={courses} />
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center h-[calc(100vh-380px)]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center  font-bold">
                  No Courses Found 😢
                </h1>
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default CoursesPage;
