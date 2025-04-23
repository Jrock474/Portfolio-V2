import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer
      className={`flex justify-evenly h-[auto] bottom-0 right-0 text-[#f1f1f1] w-full mt-auto z-[1000] no-underline p-5 ${
        pathName === "/" ? "bg-black/30" : "bg-[#585757]"
      }`}
    >
      <p className="flex items-center">
        <a href="mailto:jordanw0412@gmail.com">Contact</a>
      </p>
      <div className="flex flex-row items-center">
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
