import React from 'react';
import styled from 'styled-components';
import BackgroundParticles from '../components/Particles';
import LandingSection from '../components/Landing';
import ContentSection from '../components/ContentSection';
import ContactSection from '../components/ContactSection';
import pageData from '../public/LandingPageData.json';

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  position: relative;
  overflow: hidden;
  color: #f0f0f0;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  color: #ccc;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
  position: relative;
`;

export default function Home() {
  return (
    <Background>
      <BackgroundParticles />

      <LandingSection
        title={pageData.hero.title}
        paragraphs={pageData.hero.paragraphs}
        typewriterWords={pageData.hero.typewriterWords}
      />

      <ContentSection
        heading={pageData.about.heading}
        paragraphs={pageData.about.paragraphs}
      />

      <ContactSection
        heading={pageData.contact.heading}
        form={pageData.contact.form}
      />

      <Footer>{pageData.footer.copyright}</Footer>
    </Background>
  );
}
