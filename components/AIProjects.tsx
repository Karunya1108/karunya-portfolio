// components/AIProjects.tsx
import styled from 'styled-components';
import { FaHeartbeat } from 'react-icons/fa';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  color: white;
  backdrop-filter: blur(12px);
  border-radius: 14px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
   &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }

`;


const Title = styled.h2`
  font-size: 2.5rem;
  color: #fbd46d;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #fbd46d;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #eaeaea;
`;

export default function AIProjects() {
  return (
    <Wrapper>
      <Title>
        <FaHeartbeat size={28} />
        BeatAware – Heart Attack Prediction App
      </Title>
      <Subtitle>
        Heart attack detection using <Highlight>ML</Highlight> and emergency alerts.
      </Subtitle>

      <Paragraph>
        <Highlight>BeatAware</Highlight> is an intelligent health monitoring application designed to predict heart attacks and related cardiovascular problems before they happen.
      </Paragraph>

      <Paragraph>
        It uses advanced <Highlight>machine learning</Highlight> models trained on historical data from patients who previously suffered from heart-related conditions. By analyzing this data, the system detects early signs of potential heart issues.
      </Paragraph>

      <Paragraph>
        The system is linked to a <Highlight>wearable device</Highlight> that continuously monitors vital signs like heart rate and oxygen levels in real-time.
      </Paragraph>

      <Paragraph>
        If unusual patterns are detected, the app <Highlight>immediately alerts </Highlight>the user or medical professionals — ensuring timely medical attention and potentially saving lives.
      </Paragraph>
    </Wrapper>
  );
}
