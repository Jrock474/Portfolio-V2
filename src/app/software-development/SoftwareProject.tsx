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
          <div className="flex flex-col justify-center align-middle width-[100%] absolute h-full">
            <strong className="flex justify-center w-full">
              {softwareProject.title}
            </strong>
            <p> {softwareProject.description}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={softwareProject.gitHub}
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={softwareProject.website}
            >
              Website
            </a>
            </div>
        ) : null}
      </div>
    </>
  );
};

export default SoftwareProject;
