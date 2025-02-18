// src/components/Hero.js
import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  background: url('/images/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <h1>Maroua BOUDOUKHA</h1>
          <p>Data Scientist | AI Engineer | Blockchain Developer | Co-founder</p>
          <h2>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Big Data & Machine Learning Engineer", 2000,
                "Passionate Problem Solver", 2000,
                "Global Innovator", 2000
              ]}
            />
          </h2>
        </HeroContent>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
