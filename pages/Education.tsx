import styled from 'styled-components';
import EducationTimeline from '../components/Education';
import educationData from '../public/EducationData.json';
import BackgroundParticles from '../components/Particles';

const Background = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  position: relative;
  overflow: hidden;
  z-index: 0;
  color: #f0f0f0;

  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.8rem;
  color: #fbd46d;
`;
export default function EducationPage() {
  return (
    <Background>
      <BackgroundParticles />
      <PageTitle>Education</PageTitle>
      <EducationTimeline data={educationData} />
    </Background>
  );
}
