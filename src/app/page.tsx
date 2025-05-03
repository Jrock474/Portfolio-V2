import SoftwareTechnologies from "./about/components/SoftwareTechnologies";
import SoftwareLanguages from "./about/components/SoftwareLanguages";
import PageTitle from "./components/PageTitle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col z-[1000]">
        <section className="h-screen"></section>
        <section className="px-[20px] bg-black">
          <div className="max-w-[50rem] mx-auto text-left pt-[10px]">
            <PageTitle pageTitle="About Me" />
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
          </div>
        </section>
        <SoftwareLanguages />
        <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
        <SoftwareTechnologies />
      </div>
      <video autoPlay muted loop className="fixed top-0 right-0 object-cover">
        <source src="videos\Timeline_1.mp4" type="video/mp4" />
      </video>
    </>
  );
}
