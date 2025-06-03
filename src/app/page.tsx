import SoftwareTechnologies from "./about/components/SoftwareTechnologies";
import SoftwareLanguages from "./about/components/SoftwareLanguages";
import PageTitle from "./components/PageTitle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col z-[1000]">
        <section className="h-screen"></section>
        <section className="flex flex-col justify-center bg-black/80 h-screen">
          <div className="justify-center align-middle flex flex-col pt-[10px]">
            <PageTitle pageTitle="About Me" />
            <p className="max-w-[50rem] mx-auto text-left text-[1.5rem]">
              
            </p>
          </div>
        </section>
        <section className="px-[20px] mx-auto max-w-[50rem]">
          <SoftwareLanguages />
          <div className="bg-white h-[2px] mt-[50px] mb-[50px]"></div>
          <SoftwareTechnologies />
        </section>
      </div>
      <video
        autoPlay
        muted
        loop
        className="fixed w-screen h-screen top-0 right-0 object-cover"
      >
        <source src="/videos/World_is_Yours_10_Seconds.mp4" type="video/mp4" />
      </video>
    </>
  );
}
