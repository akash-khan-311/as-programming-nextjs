import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import Footer from "@/components/Shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AS Programming - Learn and Master IT Skills",
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

export default async function RootLayout({ children }) {
  const session = await auth();
  await dbConnect();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar user={session?.user} />
        </header>
        <main className="min-h-[calc(100vh-268px)]">
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
