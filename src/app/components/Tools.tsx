import Software from "./Software";

const Tools = () => {
  return (
    <>
      <div className="flex justify-center text-center flex-wrap pb-[50px]">
        <Software img="devicons/Git.svg" text="Git" />
        <Software img="devicons/GitHub.svg" text="GitHub" />
        <Software img="devicons/AWS.svg" text="AWS" />
        <Software img="devicons/fest.svg" text="Jest.js" />
      </div>
    </>
  );
};

export default Tools;
