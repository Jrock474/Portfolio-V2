"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {

  const pathName = usePathname();

  return (
    <>
      <header
        className={`text-[#f1f1f1] w-full z-[10000] h-[auto] transition-all duration-500 ease-in-out h-[100px]"
        } ${pathName === "/" ? "bg-black/30 fixed" : "bg-[#585757]"} `}
      >
        <section className="transition-all duration-500 ease-in-out flex flex-col md:flex-row flex-wrap list-none items-center justify-end  md:space-y-0 md:space-x-4 text-white text-base p-4">
          
          <ul className="flex list-none text-[1.25rem]">
            <li
              className={
                 "flex list-none items-center flex-row"
              }
            >
              <Link className="block mx-5 py-2" href="/software-development">
                About
              </Link>
              <Link className="block mx-5 py-2" href="/multi-media">
                Skills
              </Link>
              <Link className="block mx-5 py-2" href="/multi-media">
                Projects
              </Link>
              <Link className="block mx-5 py-2" href="/multi-media">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
