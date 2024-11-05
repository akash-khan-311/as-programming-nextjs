import { auth } from "@/auth";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Dashboard || AS Programming",
  description:
    "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",
  keywords:
    "AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning",
  author: "Md Akash Khan",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "AS Programming - Learn and Master IT Skills",
    description:
      "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",

    site_name: "AS Programming",
  },
};

const DashboardLayout = async ({ children }) => {
  const session = await auth();
  return (
    <>
      <div className={`${inter.className} relative min-h-screen lg:flex`}>
        <Sidebar user={session?.user} />
        <Toaster position="top-center" />
        <div className="flex-1  lg:ml-64">
          <div className="p-5">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
