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
    url: "https://as-programming-next.netlify.app",
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
      <div
        className={`${inter.className} relative min-h-screen lg:flex  h-full w-full bg-slate-950`}
      >
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px]  rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px]  rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <Sidebar user={session?.user} />
        <Toaster position="top-center" />
        <div className="flex-1 relative lg:ml-64 z-[0]">
          <div className="p-5">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
