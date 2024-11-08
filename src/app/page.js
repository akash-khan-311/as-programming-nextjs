import About from "@/components/Home/About/About";
import BeInstructor from "@/components/Home/BeInstructor/BeInstructor";
import BestCourse from "@/components/Home/BestCourse/BestCourse";
import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <BestCourse />
      <BeInstructor />
    </>
  );
}
