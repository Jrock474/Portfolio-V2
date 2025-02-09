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
      <header>
        <section className="container-shared-header">
          <div onClick={onNavbarClick} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="welcome-text">
            <Link href="/">
              <div className="heading">Jordan</div>
              <div className="sub-heading">
                Multimedia & Software Development
              </div>
            </Link>
          </div>
          <ul
            className={
              isNavbarSelected && screen.width <= 1000
                ? "nav-area-active"
                : "nav-area"
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
