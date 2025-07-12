import dynamic from 'next/dynamic';
import styled from 'styled-components';;
import BackgroundParticles from '../components/Particles';

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
export default function AIProjectsPage() {
  return (
    <Background>
      <BackgroundParticles />
      <Heading>AI Projects</Heading>
      <AIProjects />
    </Background>
  );
}
