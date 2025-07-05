"use client";
import SoftwareTechnologies from "./about/components/SoftwareTechnologies";
import SoftwareLanguages from "./about/components/SoftwareLanguages";
import PageTitle from "./components/PageTitle";
import SoftwareProject from "./software-development/SoftwareProject";
import Videos from "./multi-media/animations/Videos";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col z-[1000]">
        <section className="h-screen"></section>
        <section className="flex flex-col justify-center bg-black/80 h-screen">
          <div className="justify-center align-middle flex flex-col pt-[10px]">
            <PageTitle pageTitle="About Me" />
            <p className="max-w-[50rem] px-8 mx-auto text-left text-[1rem]">
              My journey with multimedia and software development began in 2018,
              during my computer science studies. Seeking a creative outlet, I
              embarked on self-directed learning in graphic design, followed by
              Web Design to present my graphic work effectively. This sparked a
              passion for multimedia, fueled by the continuous evolution of
              technology that keeps me in a perpetual state of learning. My
              objective is to leverage my combined expertise in software
              development and multimedia to contribute meaningfully to creative
              and Software Development communities.
            </p>
          </div>
        </section>
        <section className="px-[20px] mx-auto max-w-[50rem]">
          <SoftwareLanguages />
          <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
          <SoftwareTechnologies />
        </section>
        <section className="flex flex-col justify-center bg-black/80 h-auto">
          <div className="pt-8 pb-2 flex justify-center">Software Projects</div>
          <div className="justify-center align-middle flex pt-[10px]">
            <SoftwareProject
              img="/pictures/kanri-mono_server.png"
              title="Kanri-Mono Server"
              gitHub="https://github.com/Jrock474/GraphQL-Practice"
              website="https://graph-ql-practice-nine.vercel.app/"
              description="GraphQL server dedicated to querying the database from Kanri-Mono to return user data"
            />
            <SoftwareProject
              img="/pictures/movie_search.png"
              title="Movie Search"
              gitHub="https://github.com/Jrock474/Movie_Search"
              website="https://movie-search-jrock474.vercel.app/"
              description="A mobile responsive React app that searches movies from an IMBD API based off of provided query"
            />

          </div>
            <Link href="/software-development">
            <div>View More</div>
             </Link>
          <div className="pt-8 pb-2 flex justify-center">Multi-Media</div>
          <div className="justify-center align-middle flex pt-[10px]">
            <Videos video="/videos/Ageturnerx_Anna_Choi_Cloudscape_1_1.mp4" />
            <Videos video="/videos/World_is_Yours_10_Seconds.mp4" />
          </div>
          <Link href="/software-development">
            <div>View More</div>
             </Link>
        </section>
      </div>
      <video
        autoPlay
        muted
        loop
        className="fixed w-screen h-screen top-0 right-0 object-cover"
      >
        <source src="/videos/Ageturnerx_Anna_Choi_Cloudscape_1_1.mp4" type="video/mp4" />
      </video>
    </>
  );
}
