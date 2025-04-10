import Image from "next/image";
import { useState } from "react";
import { SoftwareDevelopmentProjectProps } from "./interfaceProps";

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
        className="flex flex-col h-auto border-[ridge] m-[10px]"
      >
        <Image
          width={350}
          height={350}
          src={softwareProject.img}
          alt={softwareProject.title}
        />
        <strong className="flex justify-center w-full pt-5 pb-5">
          {softwareProject.title}
        </strong>
        {isSleected ? (
          <div className="flex flex-col mt-auto pb-5 pt-5">
            <p className="p-[30px] pr-[30px]">{softwareProject.description}</p>
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
