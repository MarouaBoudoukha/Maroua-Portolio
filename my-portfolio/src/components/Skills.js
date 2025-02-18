// src/components/Skills.js
import React from "react";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import and register Chart.js components
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Skills = () => {
  const data = {
    labels: ["Python", "Machine Learning", "Blockchain", "Web Dev", "Data Engineering"],
    datasets: [
      {
        label: "Skill Proficiency",
        data: [90, 85, 70, 80, 75],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 100 },
    },
  };

  return (
    <SkillsSection id="skills">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Skills
      </motion.h2>
      <Radar data={data} options={options} />
    </SkillsSection>
  );
};

export default Skills;
