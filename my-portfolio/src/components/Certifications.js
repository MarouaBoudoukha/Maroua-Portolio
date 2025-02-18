// src/components/Certifications.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CertSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  display: inline-block;
  width: 250px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Certifications = () => {
  return (
    <CertSection id="certifications">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Certifications
      </motion.h2>
      <Card>
        <h3>Dataiku Certification</h3>
        <p>Core Designer, Advanced Designer, ML Practitioner</p>
        <span>Oct 2022</span>
      </Card>
      <Card>
        <h3>Databricks Accredited Generative AI Fundamentals</h3>
        <span>Aug 2024</span>
      </Card>
      <Card>
        <h3>Microsoft Certified: Azure AI Engineer Associate</h3>
        <span>Aug 2024</span>
      </Card>
      <Card>
        <h3>Google Project Management Foundation Certificate</h3>
        <span>Sep 2024</span>
      </Card>
    </CertSection>
  );
};

export default Certifications;
