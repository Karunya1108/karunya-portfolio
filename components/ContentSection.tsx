import React from 'react';
import styled from 'styled-components';

interface AboutProps {
  heading: string;
  paragraphs: string[];
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
    transform: translateY(-5px) scale(1.015);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }
`;

const SectionInner = styled.div`
  padding: 4rem 3rem;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    color: #fbd46d;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8;
  }
`;

const AboutSection: React.FC<AboutProps> = ({ heading, paragraphs }) => (
  <SectionBox>
    <SectionInner>
      <h1>{heading}</h1>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </SectionInner>
  </SectionBox>
);

export default AboutSection;
