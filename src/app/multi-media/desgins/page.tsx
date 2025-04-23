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
      <div className="gallery-section">
        <PageTitle pageTitle="Designs" />
        <div className="gallery-container">
          <div className="gallery-picture">
            <Image
              width={600}
              height={350}
              alt="Chalks BBQ Banner"
              src="/pictures/Chalks_BBQ_Banner.png"
              onClick={() => {
                imageClick("/pictures/Chalks_BBQ_Banner.png");
              }}
            />
            <Image
              onClick={() => {
                imageClick("/pictures/Chalks_BBQ.png");
              }}
              width={600}
              height={350}
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
