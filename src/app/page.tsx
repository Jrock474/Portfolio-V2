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
            <h1 className="text-[2.5rem]">Jordan Williams</h1>
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

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <img
                  src="/pictures/1652164686829.jpeg"
                  alt="Jordan's portrait"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-30 p-2 flex justify-center gap-3">
                  <a
                    href="/Jordan%20Williams%20Resume%20-%20SWE%20%26%20Implimentation.pdf"
                    download="Jordan_Williams_Resume_SWE_Implimentation.pdf"
                    aria-label="Download Jordan Williams resume"
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3"
                      />
                    </svg>
                    Resume
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jordanw0412"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LinkedIn profile"
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.784 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v4.71z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills-section"
          className="px-[20px] mx-auto max-w-[50rem]"
        >
          <h2 className="text-3xl text-center mt-[70px] mb-[40px]">
            Programming Languages
          </h2>
          <SoftwareLanguages />
          <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
          <h2 className="text-3xl text-center mt-[70px] mb-[40px]">Software</h2>
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

        <section id="contact-section" className="bg-slate-900/80 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Let’s Connect!
              </h2>

              <form
                action="https://formsubmit.co/jordanw0412@gmail.com"
                method="POST"
                className="space-y-4 text-left"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization (optional)"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
                <input
                  type="text"
                  name="_subject"
                  placeholder="Subject"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  required
                  className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <button
                    type="submit"
                    className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Send message
                  </button>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/jordanw0412"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open LinkedIn profile"
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/20"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="/Jordan%20Williams%20Resume%20-%20SWE%20%26%20Implimentation.pdf"
                      download="Jordan_Williams_Resume_SWE_Implimentation.pdf"
                      aria-label="Download resume"
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/20"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </form>
            </div>
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
