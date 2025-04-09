import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between bottom-0 right-0 bg-black/30 text-[#f1f1f1] w-full mt-auto z-[1000] no-underline p-5">
      <div className="flex flex-row items-center">
      <a href="mailto:jordanw0412@gmail.com">Contact</a>
        <img
          className="h-4 w-4 flex"
          src="/site_images/copyright_symbol_3.png"
          alt={"Copyright symbol"}
        />
        <p className="p-3">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
