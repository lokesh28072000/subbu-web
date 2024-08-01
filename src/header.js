// NavScrollExample.js
import React from 'react';
import './App.css'; // Ensure the path is correct
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/Logo.png';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-nav ">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="Logo" className="logo-img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="me-auto my-2 my-lg-0 navbar-links" navbarFixed>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About me</Nav.Link>
            <Nav.Link href="#action3">Services</Nav.Link>
            <Nav.Link href="#action4">Resume</Nav.Link>
            <Nav.Link href="#action5">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
