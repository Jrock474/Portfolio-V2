import Image from "next/image";
import { SoftwareProps } from "../interfaceProps";

const Software = (props: SoftwareProps) => {
  return (
    <>
      <div id="devicon">
        <Image id="devicon-image" alt={props.text} src={props.img} />
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Software;
