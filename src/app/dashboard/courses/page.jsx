import { auth } from "@/auth";
import AdmissionCoursesCom from "@/components/Dashboard/AdmissionCourses/AdmissionCoursesCom";
import { getPurchasedCourses } from "@/lib";

const CoursesPage = async () => {
  const session = await auth();
  const user = session.user;

  const data = await getPurchasedCourses(user.email);
  console.log(data.data);
  if (!data) {
    return (
      <>
        <h1 className=" h-[calc(100vh-100px)] flex justify-center items-center text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center">
          No Courses Found
        </h1>
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
