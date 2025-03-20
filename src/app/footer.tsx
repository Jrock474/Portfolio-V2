import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-evenly bottom-0 right-0 bg-black/30 text-[#f1f1f1] w-full mt-auto z-[1000] no-underline p-5">
      <p>
        <a href="mailto:jordanw0412@gmail.com">Contact</a>
      </p>
      <div className="flex flex-row items-center">
        <Image
          className="h-4 w-4 flex"
          src="/site_images/copyright_symbol_3.png"
          alt={"Copyright symbol"}
          width={16}
          height={16}
        />
        <p className="p-3">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
