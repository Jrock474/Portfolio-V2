import Image from "next/image";
import { SoftwareDevelopmentProjectProps } from "./interfaceProps";

const SoftwareProject = (softwareProject: SoftwareDevelopmentProjectProps) => {
  return (
    <>
      <div className="software-project">
        <Image src={softwareProject.img} alt={softwareProject.title} />
        <strong className="software-project-name">
          {softwareProject.title}
        </strong>
        <p className="software-project-description">
          {softwareProject.description}
        </p>
        <div className="software-button-container">
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
      </div>
    </>
  );
};

export default SoftwareProject;
