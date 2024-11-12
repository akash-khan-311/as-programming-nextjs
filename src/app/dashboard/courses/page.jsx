import { auth } from "@/auth";
import AdmissionCoursesCom from "@/components/Dashboard/AdmissionCourses/AdmissionCoursesCom";
import { getPurchasedCourses } from "@/lib";
import Link from "next/link";

const CoursesPage = async () => {
  const session = await auth();
  const user = session.user;

  const data = await getPurchasedCourses(user.email);

  if (!data.data) {
    return (
      <>
        <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
            Ops! you have no course purchased yet
          </h1>
          <Link
            href={"/courses"}
            className="bg-pink-600 py-2 px-8 rounded-md transition-all duration-200 hover:bg-pink-800 mt-4"
          >
            Purchase Course
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <AdmissionCoursesCom coursesInfo={data.data} />
    </>
  );
};
export default CoursesPage;
