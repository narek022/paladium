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
      <Container className="cont">
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
            <NavLink className="nl" href="/">Home</NavLink>
            <NavLink className="nl" href="/about">About Us</NavLink>
            <NavLink className="nl" href="/works">Our Works</NavLink>
            <NavLink className="nl" href="/services">Our Services</NavLink>
            <NavLink className="nl" href="/products">Our Products</NavLink>
            <NavLink className="nl" href="/contact">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
