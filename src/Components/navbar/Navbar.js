import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import logo from "./Pics/logo1.png";
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
      sticky="top"
      collapseOnSelect
      expand="lg"
      className={navbar ? "navbar active" : "navbar"}
      variant="secondary"
    >
      <Container className="cont">
        <NavbarBrand href="/">
          <img
            src={logo}
            height={70}
            width={100}
            className="d-inline-block align-top"
            alt="Logo"
          ></img>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nl" href="/">Home</NavLink>
            <NavLink className="nl" href="/about">About Us</NavLink>
            <NavLink className="nl" href="/work">Our Work</NavLink>
            <NavLink className="nl" href="/service">Our Service</NavLink>
            <NavLink className="nl" href="/products">Our Products</NavLink>
            <NavLink className="nl" href="/contact">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
