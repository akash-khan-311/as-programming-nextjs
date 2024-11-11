import { auth } from "@/auth";
import { getAssignmentForInstructor } from "@/lib";
import InstructorAssignmentCard from "./InstructorAssignmentCard";

const InstructorAssignments = async () => {
  const session = await auth();
  const user = session.user;
  // Fetch assignments for the instructor
  const data = await getAssignmentForInstructor(user.email);
  const assignments = data.data;
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow  overflow-hidden">
            {assignments.length ? (
              <div className="min-w-full leading-normal">
                <div className="flex flex-col gap-y-10">
                  {/* Assignment row data */}{" "}
                  {assignments &&
                    assignments.map((assignment) => (
                      <InstructorAssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                      />
                    ))}
                </div>
              </div>
            ) : (
              <h1 className="text-3xl min-h-[calc(100vh-268px)] text-white md:text-4xl lg:text-5xl flex justify-center items-center text-center py-4">
                No Assignment Found
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstructorAssignments;
