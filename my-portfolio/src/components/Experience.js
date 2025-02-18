// src/components/Experience.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-left: 3px solid #3498db;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Experience
      </motion.h2>
      <TimelineItem>
        <motion.h3 whileHover={{ scale: 1.05 }}>Stealth Power | Data & Machine Learning Engineer</motion.h3>
        <span>May 2024 - Nov 2024</span>
        <p>
          Led design and implementation of a RESTful API and developed ML models to optimize solar performance.
        </p>
      </TimelineItem>
      <TimelineItem>
        <motion.h3 whileHover={{ scale: 1.05 }}>LCL Bank - Crédit Lyonnais | Data Analyst Apprentice</motion.h3>
        <span>Sep 2022 - Sep 2024</span>
        <p>
          Automated access rights reviews and enhanced data quality indicators using Dataiku and Python.
        </p>
      </TimelineItem>
    </ExperienceSection>
  );
};

export default Experience;
