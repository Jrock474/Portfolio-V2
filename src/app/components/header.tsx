"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const [isNavbarSelected, setIsNavbarSelected] = useState(false);

  const onNavbarClick = () => {
    if (isNavbarSelected === false) {
      setIsNavbarSelected(true);
    } else {
      setIsNavbarSelected(false);
    }
  };

  const pathName = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <header
        className={`text-[#f1f1f1] w-full z-[10000] h-[auto] transition-all duration-500 ease-in-out ${
          isNavbarSelected ? "h-[200px]" : "h-[100px]"
        } ${pathName === "/" ? "bg-black/30 fixed" : "bg-[#585757]"} `}
      >
        <section className="transition-all duration-500 ease-in-out flex flex-col md:flex-row flex-wrap list-none items-center justify-end  md:space-y-0 md:space-x-4 text-white text-base p-4">
          {isMobile ? (
            <div
              onClick={onNavbarClick}
              className="absolute z-[10000] flex flex-col justify-between w-[30px] h-[21px] top-[25px] right-[25px] cursor-pointer"
            >
              <span className="h-[3px] w-full bg-white rounded-[50px]"></span>
              <span className="h-[3px] w-full bg-white rounded-[50px]"></span>
              <span className="h-[3px] w-full bg-white rounded-[50px]"></span>
            </div>
          ) : null}

          <ul className="flex list-none text-[1.25rem]">
            <li
              className={
                isNavbarSelected && isMobile
                  ? "flex flex-col w-full text-center list-none"
                  : isMobile
                    ? "hidden"
                    : "flex list-none items-center flex-row"
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
