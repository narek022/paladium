import React, { Component, useState } from "react";
import { Container, Navbar, NavbarBrand, NavLink, Nav } from "react-bootstrap";
import logo from "./Pics/logo.png";
import "./Navbar.css";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const change = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", change);
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className={navbar ? "navbar active" : "navbar"}
      variant="secondary"
    >
      <Container>
        <NavbarBrand href="/">
          <img
            src={logo}
            height={30}
            width={30}
            className="d-inline-block align-top"
            alt="Logo"
          ></img>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/works">Our Works</NavLink>
            <NavLink href="/services">Our Services</NavLink>
            <NavLink href="/products">Our Products</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
