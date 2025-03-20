import Image from "next/image";
import { DevIcon } from "./interfaceProps";

const Software = (devIcon: DevIcon) => {
  return (
    <>
      <div id="devicon">
        <Image id="devicon-image" width={60} height={60} alt={devIcon.text} src={devIcon.img} />
        <p>{devIcon.text}</p>
      </div>
    </>
  );
};

export default Software;
