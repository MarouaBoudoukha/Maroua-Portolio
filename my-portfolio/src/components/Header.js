// src/components/Header.js
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(0,0,0,0.8);
  padding: 1rem;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  color: #fff;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="hero" smooth={true} duration={500}>Home</Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </NavItem>
        <NavItem>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </NavItem>
        <NavItem>
          <Link to="experience" smooth={true} duration={500}>Experience</Link>
        </NavItem>
        <NavItem>
          <Link to="education" smooth={true} duration={500}>Education</Link>
        </NavItem>
        <NavItem>
          <Link to="certifications" smooth={true} duration={500}>Certifications</Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;
