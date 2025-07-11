import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Typewriter } from 'react-simple-typewriter';
import DeveloperAnimation from './Main Scene';

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  position: relative;
  overflow: hidden;
  z-index: 0;
  color: #f0f0f0;
`;

const HeroBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 10rem 2rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(5px);
  border-radius: 0 50px 50px 0;
  box-shadow: 4px 0 30px rgba(255, 255, 255, 0.05);
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 2;
  min-width: 300px;

  h1 {
    font-size: 5rem;
    margin-bottom: 4rem;
    color: #fbd46d;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #f0f0f0;
  }

  h5 {
    font-weight: 500;
    font-size: 1.5rem;
    color: #ddd;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.1rem;
    }

    h5 {
      font-size: 1rem;
    }
  }
`;

const HeroAnimation = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  // NEW: Add size constraints
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 250px;
    margin-top: 2rem;
  }
`;

const SectionBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  margin: 2rem auto;
  border-radius: 20px;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  width: 90%;
  max-width: 1000px;
  @media (max-width: 768px) {
  padding: 2rem 1rem;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.1rem;
  }
}


  &:hover {
    transform: translateY(-5px) scale(1.015);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }
`;

const SectionInner = styled.div`
  padding: 3rem 2rem;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fbd46d;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8;
    color: white;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

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
    resize: vertical;
    min-height: 100px;
  }

  button {
    background: #663399;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #9f5bd0;
    }
  }

  @media (max-width: 768px) {
    input,
    textarea,
    button {
      font-size: 1rem;
    }
  }
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

const BackgroundParticles = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 50,
            density: { enable: true, value_area: 800 },
          },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 20,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 50, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default function LandingPage() {
  return (
    <Background>
      <BackgroundParticles />
      <HeroBox>
        <HeroText>
          <h1>Hi, I'm Karunya...</h1>
          <p>A passionate developer turning ideas into interactive experiences.</p>
          <p>Designing interfaces. Developing logic. Delivering impact.</p>
          <h5>
            <Typewriter
              words={['AI Enthusiast', 'Frontend Developer', 'UI/UX Developer']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h5>
        </HeroText>
        <HeroAnimation>
          <DeveloperAnimation />
        </HeroAnimation>
      </HeroBox>

      <SectionBox>
        <SectionInner>
          <h1>About Me</h1>
          <p>I am an enthusiastic and self-driven Software Engineer with a deep passion for UI/UX design and intuitive coding. I thrive on crafting seamless, user-centric digital experiences that blend creativity with functionality.</p>
          <br />
          <p>I enjoy solving real-world problems through code, with a continuous learning mindset and an eye for detail. My interests lie especially in Full Stack Development, where I aim to build scalable, responsive web applications, and in Automation, where I explore streamlining processes to improve productivity and user satisfaction.</p>
          <br />
          <p>With a solid grasp of HTML, CSS and foundational programming principles, I approach each project with a balance of logic and creativity. My goal is to contribute to impactful software solutions that not only function well but also delight the end user through thoughtful design and smooth interactions.</p>
        </SectionInner>
      </SectionBox>

      <SectionBox>
        <SectionInner>
          <h1>Contact Me</h1>
          <ContactForm onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </ContactForm>
        </SectionInner>
      </SectionBox>

      <Footer>&copy; {new Date().getFullYear()} Karunya</Footer>
    </Background>
  );
}
