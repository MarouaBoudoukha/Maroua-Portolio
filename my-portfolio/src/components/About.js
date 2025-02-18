// src/components/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Me
      </motion.h2>
      <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
        I am a Big Data & Machine Learning Engineer with diverse international experience (Algeria, France, USA), fluent in multiple languages and passionate about building cutting-edge AI and blockchain solutions.
      </motion.p>
    </AboutSection>
  );
};

export default About;
