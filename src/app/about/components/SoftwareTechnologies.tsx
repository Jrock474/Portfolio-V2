import Software from "./Software";

const SoftwareTechnologies = () => {
  return (
    <>
      <div className="text-[2.25rem] text-center mt-[70px] mb-[40px]">
        Software
      </div>
      <div className="flex justify-center text-center flex-wrap pb-[50px]">
        <Software img="devicons/After Effects.svg" text="After Effects" />
        <Software img="devicons/Adobe Illustrator.svg" text="Illustrator" />
        <Software img="devicons/Adobe Photoshop.svg" text="Photoshop" />
        <Software img="devicons/Jira.svg" text="Jira" />
        <Software
          img="devicons/Visual Studio Code (VS Code).svg"
          text="VS Code"
        />
        <Software img="devicons/Git.svg" text="Git" />
        <Software img="devicons/GitHub.svg" text="GitHub" />
        <Software img="devicons/AWS.svg" text="AWS(EC2)" />
        <Software img="devicons/JSON.svg" text="JSON" />
        <Software img="devicons/React.svg" text="React.js" />
        <Software img="devicons/Node.js.svg" text="Node.js" />
        <Software img="devicons/Express.svg" text="Express.js" />
        <Software img="devicons/Jest.svg" text="Jest.js" />
        <Software img="devicons/Sequelize.svg" text="Sequelize.js" />
        <Software img="devicons/NPM.svg" text="NPM" />
      </div>
    </>
  );
};

export default SoftwareTechnologies;
