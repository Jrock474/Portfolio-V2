"use client";

import PageTitle from "./components/PageTitle";
import SoftwareLanguages from "./about/components/SoftwareLanguages";
import SoftwareTechnologies from "./about/components/SoftwareTechnologies";
import { ExploreButton } from "./components/ExploreButton";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col z-[1000]">
        <section className="gap-10 h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="text-[2.5rem]">Jordan</div>
            <div className="text-[1.5rem]">
              Multimedia & Software Development
            </div>
          </div>
          <ExploreButton />
        </section>
        <section
          id="about-section"
          className="flex items-center bg-slate-950/90 py-20 min-h-screen"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px] rounded-[2rem] bg-slate-900/80 p-8 backdrop-blur-sm">
              <div className="flex flex-col justify-center">
                <PageTitle pageTitle="About Me" />
                <p className="text-slate-200 text-lg leading-7">
                  My journey with multimedia and software development began in
                  2018, during my computer science studies. Seeking a creative
                  outlet, I embarked on self-directed learning in graphic
                  design, followed by Web Design to present my graphic work
                  effectively.
                </p>
                <p className="mt-6 text-slate-200 text-lg leading-7">
                  This sparked a passion for multimedia, fueled by the
                  continuous evolution of technology that keeps me in a
                  perpetual state of learning. My objective is to leverage my
                  combined expertise in software development and multimedia to
                  contribute meaningfully to creative and software development
                  communities.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <img
                  src="/pictures/1652164686829.jpeg"
                  alt="Jordan portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-[20px] mx-auto max-w-[50rem]">
          <SoftwareLanguages />
          <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
          <SoftwareTechnologies />
        </section>
      </div>
      <section>
        <PageTitle pageTitle="Recent Projects" />
      </section>
      <video
        src="/videos/Ageturnerx_Anna_Choi_Cloudscape_1_1.mp4"
        autoPlay
        muted
        loop
        className="fixed w-screen h-screen top-0 right-0 object-cover -z-10"
      ></video>
    </div>
  );
}
