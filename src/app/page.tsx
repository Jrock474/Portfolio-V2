"use client";

import ProjectSection from "./components/sections/ProjectSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import FormSection from "./components/sections/FormSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col z-[1000]">
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <FormSection />
      </div>
      <video
        src="/videos/Ageturnerx_Anna_Choi_Cloudscape_1_1.mp4"
        autoPlay
        muted
        loop
        className="fixed w-screen h-screen top-0 right-0 object-cover -z-10"
      ></video>
    </>
  );
}
