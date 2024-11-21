"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../public/assets/scss//header.module.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Add class when scrolled 50px or more
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container navbar__container">
            <a className="logo" href="#">
              <Image
                className="dark:invert"
                src="../assets/images/logo.webp"
                alt="Next.js logo"
                width={148}
                height={74}
                priority
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link className="nav-link" href="/">
                  Home
                </Link>
                <Link className="nav-link" href="/about">
                  About
                </Link>
                <Link className="nav-link" href="/services">
                  services
                </Link>
                <Link className="nav-link" href="/faqs">
                  faqs
                </Link>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
