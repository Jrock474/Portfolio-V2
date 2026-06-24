"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const [isNavbarSelected, setIsNavbarSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false)

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-[#f1f1f1] w-full z-[1000] h-[auto] transition-all duration-500 ease-in-out ${
          isNavbarSelected ? "h-[200px]" : "h-[100px]"
        } ${isHovered === true ? "bg-black/80" : "bg-black/30"} `}
      >
        <section className="ml-10 mr-10 flex flex-col md:flex-row flex-wrap list-none items-center justify-end space-y-4 md:space-y-0 md:space-x-4 text-white text-base p-2">
          {isMobile ? (
            <div
              onClick={onNavbarClick}
              role="button"
              aria-expanded={isNavbarSelected}
              aria-label="Toggle navigation"
              className="absolute z-[10000] flex flex-col justify-between w-[30px] h-[21px] top-[25px] right-[25px] cursor-pointer"
            >
              <span className="h-[3px] w-full bg-white rounded-[50px]"></span>
              <span className="h-[3px] w-full bg-white rounded-[50px]"></span>
              <span className="h-[3px] w-full bg-white rounded-[50px]"></span>
            </div>
          ) : null}
          {isMobile ? ( <div className="text-center h-full font-juana">
            <Link href="/">
              <div className="text-[2.5rem]">Jordan</div>
              <div className="text-[1.5rem] p-[10px]">
                Multimedia & Software Development
              </div>
            </Link>
          </div>) : ("")}
          <ul className="flex list-none items-center">
            <li
              className={
                isMobile
                  ? `w-full overflow-hidden transition-all duration-500 ease-in-out ${
                      isNavbarSelected ? "max-h-[400px] py-4" : "max-h-0"
                    }`
                  : "flex list-none items-center flex-row"
              }
            >
              <div className={isMobile ? "flex flex-col items-center" : "flex items-center flex-row"}>
                <NavLink navLink="About" />
                <NavLink navLink="Skills" />
                <NavLink navLink="Projects" />
                <NavLink navLink="Contact" />
              </div>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
