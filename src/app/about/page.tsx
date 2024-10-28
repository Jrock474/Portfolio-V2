import Devicons from "./Devicons";

const About = () => {
  return (
    <>
      <div className="about-content-flex">
        <h1>About Me</h1>
        <section className="about-section2-bg">
          <div className="about-section-content">
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
            <div className="skills-text">Skills</div>
            <div className="skills">
              <p className="skills-grid1">Video Editing</p>
              <p className="skills-grid2">Graphic Design</p>
              <p className="skills-grid3">Animations</p>
              <p className="skills-grid4">Game Design</p>
              <p className="skills-grid5">Typography</p>
              <p className="skills-grid6">Music Production</p>
              <p className="skills-grid7">Software Development</p>
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
