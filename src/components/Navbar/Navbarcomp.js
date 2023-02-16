import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navbarcomp = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar
        fixed="top"
        className="test"
        collapseOnSelect
        expand="lg"
        bg="success"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">GARAGE-TECHFORUM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav style={{ color: "white", marginRight: "1vw" }}>HOME</Nav>
              </Link>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <Nav style={{ color: "white", marginRight: "1vw" }}>BLOG</Nav>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Nav style={{ color: "white", marginRight: "1vw" }}>
                  CONTACT US
                </Nav>
              </Link>
              <Link to="/forums" style={{ textDecoration: "none" }}>
                <Nav style={{ color: "white", marginRight: "1vw" }}>FORUMS</Nav>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomp;
