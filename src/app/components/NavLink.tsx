import React from "react";
import { track } from "@vercel/analytics";

const NavLink = ({ navLink }: { navLink: string }) => {
  const handleClick = () => {
    track(`${navLink}_click`);
    const section = document.getElementById(
      `${navLink.toLocaleLowerCase()}-section`,
    );
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      className="text-xl p-3 ml-3 mr-3 rounded-full nav"
      onClick={handleClick}
    >
      {navLink}
    </button>
  );
};

export default NavLink;
