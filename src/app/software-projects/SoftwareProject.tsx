import Image from "next/image";
import { useState } from "react";
import { SoftwareDevelopmentProjectProps } from "./interfaceProps";

const SoftwareProject = (softwareProject: SoftwareDevelopmentProjectProps) => {
  const [isSleected, setIsSelected] = useState(false);

  const cardClick = () => {
    if (isSleected === true){
      setIsSelected(false)
    } else {
      setIsSelected(true)
    }

  }

  return (
    <>
      <div onClick={cardClick} className="software-project">
        <Image
          width={350}
          height={350}
          src={softwareProject.img}
          alt={softwareProject.title}
        />
        <strong className="software-project-name">
          {softwareProject.title}
        </strong>
        {isSleected ? (
          <div className="software-button-container">
            <p className="software-project-description">
              {softwareProject.description}
            </p>
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
        ) : (
          null
        )}
      </div>
    </>
  );
};

export default SoftwareProject;
