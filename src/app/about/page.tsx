import SoftwareTechnologies from "./components/SoftwareTechnologies";
import SoftwareLanguages from "./components/SoftwareLanguages";

const About = () => {
  return (
    <>
      <div className="about-content-flex">
        <h1 className="text-center bg-[#333] pt-5 pb-5 m-0 w-full mb-[15px] text-[1.3rem]">
          About Me
        </h1>
        <section className="px-[20px] bg-[linear-gradient(rgba(75,75,75,0),rgba(26,26,48,1),rgba(26,26,48,1))] bg-no-repeat bg-cover">
          <div className="max-w-[50rem] mx-auto text-left pt-[10px]">
            <p>
              My journey with multimedia and software development began in 2018,
              during my computer science studies. Seeking a creative outlet, I
              embarked on self-directed learning in graphic design, followed by
              web design to present my graphic work effectively. This sparked a
              passion for multimedia, fueled by the continuous evolution of
              technology that keeps me in a perpetual state of learning. My
              objective is to leverage my combined expertise in software
              development and multimedia to contribute meaningfully to the art
              and software development communities.
            </p>
            <p>
              All Links: <a href="https://linktr.ee/Jordan474">Linktree</a>
            </p>
            <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
            <SoftwareLanguages />
            <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
            <SoftwareTechnologies />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
