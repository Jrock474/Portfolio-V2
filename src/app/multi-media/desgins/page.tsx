"use client";
import Image from "next/image";
import { useState } from "react";
import PageTitle from "@/app/components/PageTitle";

const Designs = () => {
  // Lightbox effect logic
  const [isLightboxActive, setIsLightBoxActive] = useState(false);
  const [lightbox, setLightBox] = useState("");

  const imageClick = (image: string) => {
    if (isLightboxActive === false) {
      setLightBox(image);
      setIsLightBoxActive(true);
    }
  };

  const lightboxImageClick = () => {
    setIsLightBoxActive(false);
    setLightBox("");
  };

  return (
    <>
      {isLightboxActive === true ? (
        <div onClick={lightboxImageClick} id="lightbox">
          <img alt={lightbox} src={lightbox} />
        </div>
      ) : null}
      <div className="w-full h-full">
        <PageTitle pageTitle="Designs" />
        <div className="flex flex-col items-center px-[20px]">
          <div className="mx-[5px] mb-[10px] flex flex-wrap justify-center">
            <img
              className="max-h-[250px] max-w-full h-auto"
              alt="Chalks BBQ Banner"
              src="/pictures/Chalks_BBQ_Banner.png"
              onClick={() => {
                imageClick("/pictures/Chalks_BBQ_Banner.png");
              }}
            />
            <img
              className="max-h-[250px] max-w-full h-auto"
              onClick={() => {
                imageClick("/pictures/Chalks_BBQ.png");
              }}
              alt="Chalks BBQ"
              src="/pictures/Chalks_BBQ.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Designs;
