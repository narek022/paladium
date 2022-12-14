import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
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
            <Link className="nl" to="/">Home</Link>
            <Link className="nl" to="/about">About Us</Link>
            <Link className="nl" to="/works">Our Works</Link>
            <Link className="nl" to="/services">Our Services</Link>
            <Link className="nl" to="/products">Our Products</Link>
            <Link className="nl" to="/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
