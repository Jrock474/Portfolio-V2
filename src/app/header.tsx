"use client";
import { useState } from "react";
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <header
        className={`bg-black/30 text-[#f1f1f1] w-full z-[1000] overflow-hidden transition-all duration-500 ease-in-out ${
          isNavbarSelected ? "h-[200px]" : "h-[100px]"
        }`}
      >
        <section className=" transition-all duration-500 ease-in-out flex flex-col md:flex-row flex-wrap list-none items-center justify-evenly space-y-4 md:space-y-0 md:space-x-4 text-white text-base p-6">
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

          <div className="text-center h-full font-juana">
            <Link href="/">
              <div className="text-[2.5rem]">Jordan</div>
              <div className="text-[1.5rem] p-[10px]">
                Multimedia & Software Development
              </div>
            </Link>
          </div>
          <ul className="flex list-none items-center">
            <li
              className={
                isNavbarSelected && isMobile
                  ? "flex flex-col w-full text-center list-none"
                  : isMobile
                    ? "hidden"
                    : "flex list-none items-center flex-row"
              }
            >
              <Link className="block px-3 py-2" href="/about">
                About
              </Link>
              <Link className="block px-3 py-2" href="/software-development">
                Software-Development
              </Link>
              <Link className="block px-3 py-2" href="/multi-media">
                Multi-Media
              </Link>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
