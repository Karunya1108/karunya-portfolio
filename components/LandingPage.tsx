import React from 'react';
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
  flex-wrap: wrap; // Add this
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(5px);
  border-radius: 0 50px 50px 0;
  box-shadow: 4px 0 30px rgba(255, 255, 255, 0.05);
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;


const HeroText = styled.div`
  flex: 1;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #fbd46d;
  }

  p {
    font-size: 1.5rem;
    color: #f0f0f0;
    margin-bottom: 1rem;
  }

  h5 {
    font-weight: 500;
    font-size: 1.3rem;
    color: #ddd;
    margin-top: 1rem;
  }
`;

const HeroAnimation = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  canvas, img, svg {
    max-width: 100%;
    height: auto;
  }
`;



const GlassBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  padding: 3rem 2rem;
  max-width: 900px; 
  min-height: 600px; 
  margin: 2rem auto;
  border-radius: 20px;
  color: white;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 3rem;

  &:hover {
    transform: translateY(-5px) scale(1.025);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }

  div {
    flex: 1;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fbd46d;
  }

  p {
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  input,
  textarea {
    padding: 2rem;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
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

      
    {/* About Box */}
<GlassBox>
  <div>
    <h1>About Me</h1>
    <p>
      I am an enthusiastic and self-driven Software Engineer with a deep passion for UI/UX design and intuitive coding. I thrive on crafting seamless, user-centric digital experiences that blend creativity with functionality.
    </p>
    <br />
    <p>
      I enjoy solving real-world problems through code, with a continuous learning mindset and an eye for detail. My interests lie especially in Full Stack Development, where I aim to build scalable, responsive web applications, and in Automation, where I explore streamlining processes to improve productivity and user satisfaction.
    </p>
    <br />
    <p>
      With a solid grasp of HTML, CSS and foundational programming principles, I approach each project with a balance of logic and creativity. My goal is to contribute to impactful software solutions that not only function well but also delight the end user through thoughtful design and smooth interactions.
    </p>
  </div>
</GlassBox>

{/* Contact Box */}
<GlassBox>
  <div>
    <h1>Contact Me</h1>
    <ContactForm onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </ContactForm>
  </div>
</GlassBox>


      {/* Footer */}
      <Footer>&copy; {new Date().getFullYear()} Karunya</Footer>
    </Background>
  );
}
