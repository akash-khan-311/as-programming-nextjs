import { auth } from "@/auth";
import ManageCoursesAd from "@/components/Dashboard/Admin/ManageCoursesAd";
import { getAllCoursesAdmin } from "@/lib";

const ManageCourseAdmin = async () => {
  const session = await auth();
  const user = session.user;
  const courses = await getAllCoursesAdmin(user.email);

  return (
    <>
      <ManageCoursesAd courses={courses} authUser={user} />
    </>
  );
};
export default ManageCourseAdmin;
