"use client";

import PageTitle from "./components/PageTitle";
import SoftwareLanguages from "./about/components/SoftwareLanguages";
import SoftwareTechnologies from "./about/components/SoftwareTechnologies";
import SoftwareProject from "./software-development/SoftwareProject";
import Videos from "./multi-media/animations/Videos";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col z-[1000]">
        <section className="h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="text-[2.5rem]">Jordan</div>
            <div className="text-[1.5rem]">
              Multimedia & Software Development
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center bg-black/80 h-screen">
          <div className="justify-center align-middle flex flex-col pt-[10px]">
            <PageTitle pageTitle="About Me" />
            <p className="max-w-[50rem] px-8 mx-auto text-left text-[1rem]">
              My journey with multimedia and software development began in 2018,
              during my computer science studies. Seeking a creative outlet, I
              embarked on self-directed learning in graphic design, followed by
              Web Design to present my graphic work effectively. This sparked a
              passion for multimedia, fueled by the continuous evolution of
              technology that keeps me in a perpetual state of learning. My
              objective is to leverage my combined expertise in software
              development and multimedia to contribute meaningfully to creative
              and Software Development communities.
            </p>
          </div>
        </section>
        <section className="px-[20px] mx-auto max-w-[50rem]">
          <SoftwareLanguages />
          <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
          <SoftwareTechnologies />
        </section>
      </div>
      <video
      src="/videos/Timeline_1.mp4"
        autoPlay
        muted
        loop
        className="fixed w-screen h-screen top-0 right-0 object-cover -z-10"
      ></video>
    </div>
  );
}
