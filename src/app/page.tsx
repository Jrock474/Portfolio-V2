"use client";

import SectionTitle from "./components/SectionTitle";
import SoftwareLanguages from "./about/components/SoftwareLanguages";
import SoftwareTechnologies from "./about/components/SoftwareTechnologies";
import { ExploreButton } from "./components/ExploreButton";
import SoftwareProject from "./components/SoftwareProject";

export default function Home() {
  return (
    <>
      <div className="flex flex-col z-[1000]">
        <section className="gap-10 h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-[2.5rem]">Jordan</h1>
            <h2 className="text-[1.5rem]">Multimedia & Software Development</h2>
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
                <SectionTitle pageTitle="About Me" />
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
                  alt="Jordan's portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="skills-section" className="px-[20px] mx-auto max-w-[50rem]">
          <SoftwareLanguages />
          <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
          <SoftwareTechnologies />
        </section>
        <section
          id="projects-section"
          className=" bg-slate-950/90 pt-10 pb-20 px-5"
        >
          <SectionTitle pageTitle="Recent Projects" />
          <div className="flex flex-wrap justify-center">
            <SoftwareProject
              img="/pictures/kanri-mono_server.png"
              title="Kanri-Mono Server"
              gitHub="https://github.com/Jrock474/GraphQL-Practice"
              website="https://graph-ql-practice-nine.vercel.app/"
              description="GraphQL server dedicated to querying the database from Kanri-Mono to return user data"
              technologies={["Typescript", "GraphQl"]}
            />
            <SoftwareProject
              img="/pictures/movie_search.png"
              title="Movie Search"
              gitHub="https://github.com/Jrock474/Movie_Search"
              website="https://movie-search-jrock474.vercel.app/"
              description="A mobile responsive React app that searches movies from an IMBD API based off of provided query"
              technologies={["React", "Javascript"]}
            />
            <SoftwareProject
              img="/pictures/country_search.png"
              title="Country Search"
              gitHub="https://github.com/Jrock474/React_Project"
              website="https://react-project-jrock474.vercel.app/"
              description="My first React Project that searches and displays all Countries from an API while also displaying specific information on the selected country such as it's continent, timezone, ect."
              technologies={["React", "Javascript"]}
            />
            <SoftwareProject
              img="/pictures/portfoliov1.png"
              title="Portfolio (Version 1)"
              gitHub="https://github.com/Jrock474/Austral.github.io"
              website="https://jrock474.github.io/Austral.github.io/index.html"
              description="This was my initial portfolio that was developed without a framework while I was still learning how to code. Its purpose was to showcase my prevoius creative works"
              technologies={["HTML", "CSS", "Javascript"]}
            />
            <SoftwareProject
              img="/pictures/kanri-mono.png"
              title="Kanri-Mono"
              gitHub="https://github.com/Jrock474/Capstone_Project"
              website="https://capstone-project-psi-bay.vercel.app/"
              description="Collaborative project focused around creating a pet game. I was responsible for the server and backend"
              technologies={["Javascript", "Express", "NodeJS"]}
            />
            <SoftwareProject
              img="/pictures/health_fitness.png"
              title="Health & Fitness"
              gitHub="https://github.com/Jrock474/Front-End-Project"
              website="https://front-end-project-plum.vercel.app/"
              description="My first collaboration project focused on using HTML CSS and Vanilla JavaScript"
              technologies={["HTML", "CSS", "Javascript"]}
            />
          </div>
        </section>
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
