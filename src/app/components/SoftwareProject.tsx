import Image from "next/image";
import { useState } from "react";

export interface SoftwareDevelopmentProjectProps {
  img: string;
  title: string;
  description: string;
  gitHub: string;
  website: string;
  technologies?: string[];
}

const SoftwareProject = (softwareProject: SoftwareDevelopmentProjectProps) => {
  const [isSleected, setIsSelected] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          setIsSelected(true);
        }}
        onMouseLeave={() => {
          setIsSelected(false);
        }}
        className="flex height-[auto] relative width=[auto] flex-col border-[ridge] m-[10px]"
      >
        <Image
          width={600}
          height={350}
          src={softwareProject.img}
          alt={softwareProject.title}
        />
        {isSleected ? (
          <div className="p-6 bg-black/80 flex text-center flex-col justify-between align-middle w-full absolute h-full">
            <h3 className="">{softwareProject.title}</h3>
            <p className="text-left"> {softwareProject.description}</p>
            <div className="flex flex-row justify-between">
              <div className="flex justify-around">
                <a
                  className="p-[20px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={softwareProject.gitHub}
                >
                  <img className="h-10 w-10" src="/site_images/github.svg" />
                </a>
                <a
                  className="p-[20px]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={softwareProject.website}
                >
                  <img className="h-10 w-10" src="/site_images/website.svg" />
                </a>
              </div>
              <div className="flex flex-row justify-center">
                {softwareProject.technologies?.map((technology) => (
                  <div key={technology} className="p-[10px]">
                    <Image
                      width={40}
                      height={40}
                      src={`/devicons/${technology}.svg`}
                      alt={`${technology} logo`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SoftwareProject;
