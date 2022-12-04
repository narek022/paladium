import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, NavLink, Nav } from "react-bootstrap";
import logo from "./Pics/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";


export default function Header() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="navbar"
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
            <NavDropdown title="About Us" id="navbarScrollingDropdown" className="drop">
              <NavDropdown.Item href="/staff">Our Staff</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/staff1">
                ARSEN HOVSEPYAN
              </NavDropdown.Item>
              <NavDropdown.Item href="/staff2">
                ARMEN KHACHATRYAN
              </NavDropdown.Item>
              <NavDropdown.Item href="staff3">
                ASHOT GEVORGYAN
              </NavDropdown.Item>
              <NavDropdown.Item href="staff4">
                KAREN GRIGORYAN
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">
                About Us
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink href="/works">Our Works</NavLink>
            <NavDropdown title="Our Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="service1">AUTO SERVICES</NavDropdown.Item>
              <NavDropdown.Item href="service2">IT SERVICES</NavDropdown.Item>
              <NavDropdown.Item href="service3">
                MAINTENANCE OF COMMUNICATION EQUIPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="service4">
                TRAINING AND TESTING
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services">Our Services</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/product1">Cover</NavDropdown.Item>
              <NavDropdown.Item href="/product2">
                Tracked Vehicles Spare Parts
              </NavDropdown.Item>
              <NavDropdown.Item href="/product3">
                Sauto Spare Parts
              </NavDropdown.Item>
              <NavDropdown.Item href="/product4">Communication</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">Our Products</NavDropdown.Item>
            </NavDropdown>
            <NavLink href="/contact">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
