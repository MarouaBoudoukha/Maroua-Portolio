// src/components/Contact.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with an email API (e.g., EmailJS)
    setSubmitted(true);
  };

  return (
    <ContactSection id="contact">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Contact
      </motion.h2>
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </Form>
      )}
    </ContactSection>
  );
};

export default Contact;
