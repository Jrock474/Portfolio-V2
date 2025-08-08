import Image from "next/image";
import { DevIcon } from "../interfaceProps";

const Software = (devIcon: DevIcon) => {
  return (
    <>
      <div className="flex flex-col flex-wrap px-[20px] w-[110px] items-center">
        <Image
          id="devicon-image"
          width={50}
          height={50}
          alt={devIcon.text}
          src={devIcon.img}
        />
        <p>{devIcon.text}</p>
      </div>
    </>
  );
};

export default Software;
