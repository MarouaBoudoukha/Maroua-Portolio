// src/components/Projects.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ProjectCard = styled(motion.div)`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Projects & Hackathons
      </motion.h2>
      <ProjectGrid>
        <ProjectCard whileHover={{ scale: 1.05 }}>
          <img src="/images/project1.jpg" alt="Project 1" style={{ width: "100%", borderRadius: "8px" }} />
          <h3>AI-Powered Alert Dashboard</h3>
          <p>Developed for real-time operational monitoring at Stealth Power.</p>
        </ProjectCard>
        {/* Add more ProjectCards as needed */}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
