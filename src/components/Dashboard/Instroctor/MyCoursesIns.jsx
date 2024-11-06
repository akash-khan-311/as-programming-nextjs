import CourseDataRow from "../TableRows/CourseDataRow";

const MyCoursesIns = ({ user, courses }) => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              {courses.length ? (
                <table className="min-w-full leading-normal ">
                  <thead className="border-b backdrop-blur-lg bg-white/20">
                    <tr>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Course Title
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Level
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="px-8  font-bold py-3 text-left text-white uppercase tracking-wider "
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" backdrop-blur-sm bg-white/10 divide-y divide-gray-200">
                    {/* Room row data */}{" "}
                    {courses &&
                      courses.map((course) => (
                        <CourseDataRow key={course._id} course={course} />
                      ))}
                  </tbody>
                </table>
              ) : (
                <h1 className="text-3xl text-white min-h-[calc(100vh-268px)] md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4">
                  You have not added a course yet
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCoursesIns;
