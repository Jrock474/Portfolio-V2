import Image from "next/image";
import { useState } from "react";

export interface SoftwareDevelopmentProjectProps {
  img: string;
  title: string;
  description: string;
  gitHub: string;
  website: string;
}

const SoftwareProject = (softwareProject: SoftwareDevelopmentProjectProps) => {
  const [isSleected, setIsSelected] = useState(false);

  const cardClick = () => {
    if (isSleected === true) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };

  return (
    <>
      <div
        onClick={cardClick}
        className="flex height-[auto] relative width=[auto] flex-col border-[ridge] m-[10px]"
      >
        <Image
          width={600}
          height={350}
          src={softwareProject.img}
          alt={softwareProject.title}
        />
        {isSleected ? (
          <div className="p-6 bg-black/80 flex text-center flex-col justify-evenly align-middle width-[100%] absolute h-full">
            <strong className="">
              {softwareProject.title}
            </strong>
            <p className="text-left"> {softwareProject.description}</p>
            <div className="flex justify-around">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={softwareProject.gitHub}
              >
                <img className="h-10 w-10" src="/site_images/github.svg" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={softwareProject.website}
              >
                <img className="h-10 w-10" src="/site_images/website.svg" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SoftwareProject;
