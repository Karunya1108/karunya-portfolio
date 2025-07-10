import styled from 'styled-components';
import Certifications from '../components/Certifications';
import data from '../public/data.json'; // Adjust path as needed
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';


const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  position: relative;
  overflow: hidden;
  z-index: 0;
  color: #f0f0f0;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.8rem;
  color: #fbd46d;
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
export default function CertificationsPage() {
  return (
    <Background>
       <BackgroundParticles />
      <PageTitle> Certifications</PageTitle>
      <Certifications data={data.certifications} />
    </Background>
  );
}
