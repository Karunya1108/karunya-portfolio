import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import DeveloperAnimation from './Main Scene';

type HeroProps = {
  title: string;
  paragraphs: string[];
  typewriterWords: string[];
};

const HeroBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
  flex: 1;
  min-width: 300px;

  h1 {
    font-size: 5rem;
    color: #fbd46d;
  }

  p {
    font-size: 1.5rem;
    color: #f0f0f0;
  }

  h5 {
    font-size: 1.4rem;
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
  }
`;

const HeroAnimation = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  canvas, div {
    max-width: 550px;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export default function LandingHero({ title, paragraphs, typewriterWords }: HeroProps) {
  return (
    <HeroBox>
      <HeroText>
        <h1>{title}</h1>
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        <h5>
          <Typewriter
            words={typewriterWords}
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
  );
}
