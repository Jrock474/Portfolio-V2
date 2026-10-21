import React from "react";
import SoftwareLanguages from "../ui/SoftwareLanguages";
import Frameworks from "../ui/Frameworks";
import Tools from "../ui/Tools";

const SkillsSection = () => {
  return (
    <section id="skills-section" className="px-[20px] bg-slate-900/80">
      <div className=" mx-auto max-w-[50rem]">
        <h2 className="text-3xl text-center mt-[70px] mb-[40px]">
          Programming Languages
        </h2>
        <SoftwareLanguages />
        <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
        <h2 className="text-3xl text-center mt-[70px] mb-[40px]">
          Frameworks & Libraries
        </h2>
        <Frameworks />
        <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
        <h2 className="text-3xl text-center mt-[70px] mb-[40px]">
          Cloud, Data & Tools
        </h2>
        <Tools />
      </div>
    </section>
  );
};

export default SkillsSection;
