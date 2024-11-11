import { auth } from "@/auth";
import AdmissionCourseCard from "./AdmissionCourseCard";

const AdmissionCoursesCom = async ({ coursesInfo }) => {
  const session = await auth();
  const user = session.user;

  return (
    <>
      {coursesInfo?.length && (
        <div className="flex flex-col justify-center items-center gap-10 my-10">
          {coursesInfo.map((course) => (
            <AdmissionCourseCard
              key={course._id}
              courseObj={course}
              user={user}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default AdmissionCoursesCom;
