import { auth } from "@/auth";
import ManageCoursesAd from "@/components/Dashboard/Admin/ManageCoursesAd";
import { getAllCoursesAdmin } from "@/lib";
export const metadata = {
  title: "Manage Course | Dashbaord",
  description:
    "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",
  keywords:
    "AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning",
  author: "Md Akash Khan",
  openGraph: {
    type: "website",
    url: "https://as-programming-next.netlify.app",
    title: "AS Programming - Learn and Master IT Skills",
    description:
      "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",

    site_name: "AS Programming",
  },
};
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
