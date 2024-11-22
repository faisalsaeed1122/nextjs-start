"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../public/assets/scss//header.module.scss";

export default function Header() {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            className="dark:invert"
            src="../assets/images/logo.webp"
            alt="Next.js logo"
            width={148}
            height={74}
            priority
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">services</Nav.Link>
            <Nav.Link href="/faqs">faqs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
