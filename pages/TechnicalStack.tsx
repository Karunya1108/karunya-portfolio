import styled from 'styled-components';
import TechnicalStack from '../components/TechnicalStack';
import data from '../public/TechnicalStackData.json';
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
export default function StackPage() {
  return (
    <Background>
      <BackgroundParticles />
      <PageTitle>Technical Skills</PageTitle>
      <TechnicalStack data={data.skills} />
    </Background>
  );
}
