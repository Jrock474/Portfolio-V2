"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isNavbarSelected, setIsNavbarSelected] = useState(false);

  const onNavbarClick = () => {
    if (isNavbarSelected === false) {
      setIsNavbarSelected(true);
    } else {
      setIsNavbarSelected(false);
    }
  };

  return (
    <>
      <header className="bg-black/30 text-[#f1f1f1] w-full h-auto z-[1000]">
        <section className="px-0 mx-auto max-w-[96.125rem] w-full h-inherit flex justify-evenly content-center">
          <div
            onClick={onNavbarClick}
            className="absolute hidden flex-col justify-between w-[30px] h-[21px] top-[25px] right-[25px]"
          >
            <span className="h-[3px] w-full bg-white rounded-[10px]"></span>
            <span className="h-[3px] w-full bg-white rounded-[10px]"></span>
            <span className="h-[3px] w-full bg-white rounded-[10px]"></span>
          </div>
          <div className="text-center h-full font-juana">
            <Link href="/">
              <div className="text-[2.5rem]">Jordan</div>
              <div className="text-[1.5rem] p-[10px]">
                Multimedia & Software Development
              </div>
            </Link>
          </div>
          <ul
            className={
              isNavbarSelected && screen.width <= 1000
                ? "flex flex-col w-full p-0 text-center"
                : "flex list-none items-center"
            }
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/software-development">Software-Development</Link>
            </li>
            <li>
              <Link href="/multi-media">Multi-Media</Link>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
