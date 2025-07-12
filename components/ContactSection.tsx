import React from 'react';
import styled from 'styled-components';

interface ContactProps {
  heading: string;
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
  };
}

const SectionBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  margin: 2rem auto;
  border-radius: 20px;
  width: 90%;
  max-width: 1000px;
  color: white;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
   &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }
`;

const SectionInner = styled.div`
  padding: 4.5rem 3rem;

  h1 {
    font-size: 2.5rem;
    color: #fbd46d;
    margin-bottom: 1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  button {
    background: #663399;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    color: white;

    &:hover {
      background: #9f5bd0;
    }
  }
`;

const ContactSection: React.FC<ContactProps> = ({ heading, form }) => (
  <SectionBox>
    <SectionInner>
      <h1>{heading}</h1>
      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={form.namePlaceholder} required />
        <input type="email" placeholder={form.emailPlaceholder} required />
        <textarea placeholder={form.messagePlaceholder} required />
        <button type="submit">{form.buttonText}</button>
      </ContactForm>
    </SectionInner>
  </SectionBox>
);

export default ContactSection;
