// pages/AIProjects.tsx
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';


const AIProjects = dynamic(() => import('../components/AIProjects'), { ssr: false });

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  position: relative;
  overflow: hidden;
  z-index: 0;
  color: #f0f0f0;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #fbd46d;
  text-align: center;
  margin-bottom: 2rem;
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
     

export default function AIProjectsPage() {
  return (
    <Background>
    <BackgroundParticles />
      <Heading>AI Projects</Heading>
      <AIProjects />
    </Background>
  );
}
