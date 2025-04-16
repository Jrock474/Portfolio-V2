import Devicons from "./Devicons";

const About = () => {
  return (
    <>
      <div className="about-content-flex">
        <h1 className="text-center bg-[#333] pt-5 pb-5 m-0 w-full mb-[15px] text-[1.6rem]">
          About Me
        </h1>
        <section className="px-[20px] bg-[linear-gradient(rgba(75,75,75,0),rgba(26,26,48,1),rgba(26,26,48,1))] bg-no-repeat bg-cover">
          <div className="text-[1.3rem] max-w-[50rem] mx-auto text-left pt-[10px]">
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
            <div className="line-seporator"></div>
            <div className="text-[2.25rem] text-center mt-[70px] mb-[40px]">
              Programming Languages
            </div>
            <div className="text-[1.6rem] flex flex-wrap">
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>SQL</p>
              <p>C#</p>
              <p>Typography</p>
            </div>
            <div className="line-seporator"></div>
            <div className="software-text">Software</div>
            <div className="software">
              <Devicons />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
