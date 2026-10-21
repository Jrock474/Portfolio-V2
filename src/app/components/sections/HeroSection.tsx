import React from "react";
import { ExploreButton } from "../ui/ExploreButton";

const HeroSection = () => {
  return (
    <section className="gap-10 h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-[2.5rem]">Jordan Williams</h1>
        <h2 className="text-[1.5rem]">Software Developer</h2>
      </div>
      <ExploreButton />
    </section>
  );
};

export default HeroSection;
