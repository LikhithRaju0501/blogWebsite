import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

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
              <LinkWrapper to="/">
                <Nav style={{ color: "white", marginRight: "1vw" }}>HOME</Nav>
              </LinkWrapper>
              <LinkWrapper to="/blog">
                <Nav style={{ color: "white", marginRight: "1vw" }}>BLOG</Nav>
              </LinkWrapper>
              <LinkWrapper to="/contact">
                <Nav style={{ color: "white", marginRight: "1vw" }}>
                  CONTACT US
                </Nav>
              </LinkWrapper>
              <LinkWrapper to="/forums">
                <Nav style={{ color: "white", marginRight: "1vw" }}>FORUMS</Nav>
              </LinkWrapper>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomp;
