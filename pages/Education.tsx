// pages/Education.tsx
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

type EducationItem = {
  title: string;
  school: string;
  year: string;
  score: string;
  description?: string;
};

const educationData: EducationItem[] = [
  {
    title: 'SSLC',
    school: 'Sairam Vidyalaya',
    year: '2020',
    score: '85%',
    description: 'Built a strong foundation in core subjects like Mathematics, Science. Participated in State level Science Fair.'
  },
  {
    title: 'Higher Secondary',
    school: 'Sairam Vidyalaya',
    year: '2022',
    score: '90%',
    description: 'Built strong fundamentals in life sciences, human physiology, genetics, and organic chemistry.'
  },
  {
    title: 'B.E. Computer Science',
    school: 'KCG College of Technology',
    year: 'Ongoing',
    score: '8.34 CGPA',
    description: 'Specialized in UI/UX and Frontend developing.'
  }
];

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  position: relative;
  overflow: hidden;
  z-index: 0;
  color: #f0f0f0;
`;


const Timeline = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  transition: 0.3s ease;
  cursor: default;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }
  &:hover .hover-details {
    opacity: 1;
    max-height: 500px;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #fbd46d;
`;

const SubText = styled.p`
  font-size: 0.95rem;
  color: #ddd;
`;

const Details = styled.div`
  opacity: 0;
  max-height: 0;
  transition: all 0.4s ease;
  overflow: hidden;
  margin-top: 1rem;
  color: #ccc;
  font-size: 0.9rem;

  &.hover-details {
    pointer-events: none;
  }
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
export default function EducationPage() {
  return (
    <Background>
      <BackgroundParticles />
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fbd46d' }}>Education</h1>
      <Timeline>
        {educationData.map((item, index) => (
          <Box key={index}>
            <Title>{item.title}</Title>
            <SubText>{item.school} — {item.year}</SubText>
            <SubText>Score: {item.score}</SubText>
            {item.description && (
              <Details className="hover-details">
                {item.description}
              </Details>
            )}
          </Box>
        ))}
      </Timeline>
    </Background>
  );
}
