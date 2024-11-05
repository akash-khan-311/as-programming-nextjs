import Container from "@/components/Shared/Container";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Accordion from "@/components/Shared/Accordion";
const About = () => {
  return (
    <section>
      <Container>
        <h1 className=" text-center text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-2/3 mx-auto mb-10 border-b-4 pb-6 border-pink-400">
          What are you going to Learn
        </h1>
        <div className="">
          <TextGenerateEffect
            duration={0.1}
            className={`text-center md:w-3/4 mx-auto w-full`}
            words={`Explore programming through comprehensive courses that range from
          basic coding to advanced development. Engage with interactive content
          and hands-on exercises to grasp complex concepts. Work on real-world
          projects to enhance your skills and gain practical experience. Learn
          from industry experts and choose from tailored learning paths for all
          skill levels. Join a supportive community of learners and educators,
          collaborate on projects, and receive guidance from peers and mentors.`}
          />
        </div>
        <div className="flex w-full flex-col-reverse md:flex-row justify-center items-center mt-20 mx-auto">
          <Accordion />
          <div className="w-full ">
            <Image
              src={"/images/about.png"}
              width={800}
              height={800}
              alt={"about"}
              className="mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default About;
