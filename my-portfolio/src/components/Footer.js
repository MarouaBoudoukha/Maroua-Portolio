// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Maroua BOUDOUKHA. All rights reserved.</p>
      <Link to="hero" smooth={true} duration={500}>
        Back to Top
      </Link>
    </FooterContainer>
  );
};

export default Footer;
