import Image from "next/image";
import { useState } from "react";

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
          <Image alt={lightbox} src={lightbox} />
        </div>
      ) : null}
      <div className="gallery-section">
        <h1>Designs</h1>
        <div className="gallery-container">
          <div className="gallery-picture">
            <Image
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
