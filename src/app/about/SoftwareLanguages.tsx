import Software from "./Software";

const SoftwareLanguages = () => {
  return (
    <>
      <div className="text-[2.25rem] text-center mt-[70px] mb-[40px]">
        Programming Languages
      </div>
      <div className="flex justify-center text-center flex-wrap pb-[50px]">
        <Software img="devicons/HTML5.svg" text="HTML" />
        <Software img="devicons/CSS3.svg" text="CSS" />
        <Software img="devicons/JavaScript.svg" text="JavaScript" />
        <Software img="devicons/TypeScript.svg" text="Typescript.js" />
        <Software img="devicons/Csharp.svg" text="C#" />
      </div>
    </>
  );
};

export default SoftwareLanguages;
