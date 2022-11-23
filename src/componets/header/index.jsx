import Style from "/src/styles.scss";
import logo from "../../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../../assets/images/search_icon.png";
import shop from "../../assets/images/shop_icon.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar className="Header xl" collapseOnSelect expand="xl" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <b>TECMA</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="menu" href="#features">
              Inicio
            </Nav.Link>
            <NavDropdown
              className="menu"
              title="Servicios"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="menu-desplegable" href="#action/3.1">
                Instalacion
              </NavDropdown.Item>
              <NavDropdown.Item className="menu-desplegable" href="#action/3.2">
                Productos
              </NavDropdown.Item>
              <NavDropdown.Item className="menu-desplegable" href="#action/3.3">
                Reparacion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link className="menu" href="/Acerca">
            Acerca de
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
