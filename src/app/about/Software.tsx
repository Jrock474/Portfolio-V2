import Image from "next/image";
import { DevIcon } from "../software-projects/interfaceProps";

const Software = (devIcon: DevIcon) => {
  return (
    <>
      <div id="devicon">
        <Image id="devicon-image" alt={devIcon.text} src={devIcon.img} />
        <p>{devIcon.text}</p>
      </div>
    </>
  );
};

export default Software;
