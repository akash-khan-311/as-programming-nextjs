// import { HeroHighlight } from "../ui/HeroHighLight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Buttons from "./Buttons";

const Hero = () => {
  const words = `Welcome to the AS Programming Course Platform`;
  return (
    <>
      <header className="hero-section">
        <div className="flex flex-col justify-center items-center  text-white text-center min-h-[calc(100vh)]">
          <h1 className="flex justify-center items-center w-full">
            <TextGenerateEffect
              className={`text-4xl md:text-5xl lg:text-6xl font-bold md:w-3/5 w-full text-white `}
              words={words}
            />
          </h1>
          <p className="text-sm md:text-lg font-semibold my-4">
            Learn and teach programming with our interactive platform.
          </p>
          <Buttons />
        </div>
      </header>
    </>
  );
};
export default Hero;
