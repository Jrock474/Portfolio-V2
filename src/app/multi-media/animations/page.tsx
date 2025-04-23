import Videos from "./Videos";
import PageTitle from "@/app/components/PageTitle";

const Animations = () => {
  return (
    <>
      <div className="min-h-full w-full">
        <PageTitle pageTitle="Animations" />
        <div className="flex flex-col items-center px-[20px]">
          <div className="flex flex-wrap justify-center">
            <Videos video="/videos/Ageturnerx_Anna_Choi_Cloudscape_1_1.mp4" />
            <Videos video="/videos/World_is_Yours_10_Seconds.mp4" />
            <Videos video="/videos/Naradala_There_is_a_Dragon_up There_1.mp4" />
            <Videos video="/videos/Narardala_A Bird That Does not Sing_1.mp4" />
            <Videos video="/videos/JESSAUDREY_Trancend_1.mp4" />
            <Videos video="/videos/YUMEFOREVER_Never_Cry_Again_Single.mp4" />
            <Videos video="/videos/Rey_HeavenSward Funk_1.mp4" />
            <Videos video="/videos/17929384093574157.mp4" />
            <Videos video="/videos/17878932143344437.mp4" />
            <Videos video="/videos/Schiller Productions Logo Intro Ver.2.mp4" />
            <Videos video="/videos/Maroon_Fest_Logo_Main_1.mp4" />
            <Videos video="/videos/Logo.mp4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animations;
