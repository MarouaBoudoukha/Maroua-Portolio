// src/components/Education.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EducationSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Education
      </motion.h2>
      <div>
        <h3>Engineering Degree in Big Data & Machine Learning</h3>
        <p>EFREI Paris | Sep 2021 - Sep 2024</p>
      </div>
      <div>
        <h3>Bachelor's in Computer Science</h3>
        <p>Ferhat Abbas University, Algeria | Sep 2016 - Sep 2019</p>
      </div>
    </EducationSection>
  );
};

export default Education;
