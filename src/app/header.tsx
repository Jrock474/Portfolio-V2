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
      <header className="bg-black/30 text-[#f1f1f1] w-full h-auto z-[1000]">
        <section className="flex flex-col md:flex-row flex-wrap list-none items-center justify-evenly space-y-4 md:space-y-0 md:space-x-4 text-white text-base p-6">
          {isMobile ? (
            <div
              onClick={onNavbarClick}
              className="absolute hidden flex-col justify-between w-[30px] h-[21px] top-[25px] right-[25px]"
            >
              <span className="h-[3px] w-full bg-white rounded-[10px]"></span>
              <span className="h-[3px] w-full bg-white rounded-[10px]"></span>
              <span className="h-[3px] w-full bg-white rounded-[10px]"></span>
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
                    ? "flex flex-col list-none items-center justify-center text-white text-base"
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
