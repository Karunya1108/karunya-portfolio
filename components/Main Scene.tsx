// components/DeveloperAnimation.tsx
import Lottie from 'lottie-react';
import styled from 'styled-components';
import developerAnimation from '../public/Main Scene.json';

const AnimationWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: transparent;
  padding: 1rem;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  canvas {
    background: transparent !important;
  }
`;

export default function DeveloperAnimation() {
  return (
    <AnimationWrapper>
      <Lottie animationData={developerAnimation} loop autoplay />
    </AnimationWrapper>
  );
}
