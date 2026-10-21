import React from "react";
import SoftwareProject from "../ui/SoftwareProject";
import SectionTitle from "../ui/SectionTitle";

const ProjectSection = () => {
  return (
    <>
      <section
        id="projects-section"
        className=" bg-slate-950/90 pt-10 pb-20 px-5"
      >
        <SectionTitle pageTitle="Recent Projects" />
        <div className="flex flex-wrap justify-center">
          <SoftwareProject
            img="/pictures/freeside_atl.png"
            title="Freeside ATL"
            gitHub="https://github.com/Jrock474/freeside_atl"
            description="A modern, responsive redesign of Freeside Atlanta's website, showcasing the nonprofit makerspace's community, workshops, and resources through a clean, intuitive user experience. Built to make discovering events, exploring facilities, and learning about membership easier and more accessible."
            technologies={["Typescript", "Nextjs"]}
          />
          <SoftwareProject
            img="/pictures/api.png"
            title="Labfinder Scheduler"
            gitHub="https://github.com/Jrock474/labfinder_scheduler"
            description="A healthcare scheduling API that manages users, providers, authentication, and appointment booking using Next.js, TypeScript, and LowDB"
            technologies={["Typescript", "Nextjs"]}
          />
          <SoftwareProject
            img="/pictures/api.png"
            title="Kanri-Mono Server"
            gitHub="https://github.com/Jrock474/GraphQL-Practice"
            website="https://graph-ql-practice-nine.vercel.app/"
            description="GraphQL server dedicated to querying the database from Kanri-Mono to return user data"
            technologies={["Typescript", "GraphQL"]}
          />
          <SoftwareProject
            img="/pictures/kanri-mono.png"
            title="Kanri-Mono"
            gitHub="https://github.com/Jrock474/Capstone_Project"
            website="https://capstone-project-psi-bay.vercel.app/"
            description="Collaborative project focused around creating a pet game. I was responsible for the server and backend"
            technologies={["JavaScript", "Express", "NodeJS"]}
          />
          <SoftwareProject
            img="/pictures/portfoliov2.png"
            title="Portfolio (Version 2)"
            gitHub="https://github.com/Jrock474/Portfolio-V2"
            website="https://portfolio-v2-rho-ashy.vercel.app/"
            description="Portfolio showcasing my skills and projects in Software Development"
            technologies={["Typescript", "Nextjs"]}
          />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
