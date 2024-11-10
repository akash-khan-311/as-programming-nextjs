import AdmissionCourseCard from "./AdmissionCourseCard";

const AdmissionCoursesCom = ({ coursesInfo }) => {
  console.log("this is course info", coursesInfo);
  return (
    <>
      {coursesInfo?.length ? (
        <div className="flex flex-col justify-center items-center gap-10 my-10">
          {coursesInfo.map((course) => (
            <AdmissionCourseCard key={course._id} courseObj={course} />
          ))}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-128px)] flex flex-col justify-center items-center text-white">
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
      )}
    </>
  );
};
export default AdmissionCoursesCom;
