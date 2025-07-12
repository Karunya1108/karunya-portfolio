import styled from 'styled-components';
import { FaHeartbeat } from 'react-icons/fa';
import aiData from '../public/AIProjectsData.json';

const Grid = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 4rem 1.5rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem 2rem;
  max-width: 1000px;
  width: 100%;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.08);
  transition: 0.3s ease;
  line-height: 1.9;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 40px rgba(138, 43, 226, 0.25);
    border-color: #9b59b6;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #fbd46d;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Subtitle = styled.h4`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #eee;
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  margin-top: 1.5rem;
  color: #f0f0f0;
`;

const Highlight = styled.span`
  color: #fbd46d;
  font-weight: bold;
`;

export default function AIProjects() {
  const project = aiData.projects[0];
  const highlightWords = project.highlights;

  // Function to highlight keywords
  const highlightText = (text: string) => {
    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      highlightWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
        <Highlight key={index}>{part}</Highlight>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <Grid>
      <ProjectCard>
        <Title><FaHeartbeat /> {project.title}</Title>
        <Subtitle>{highlightText(project.subtitle)}</Subtitle>
        {project.paragraphs.map((para, idx) => (
          <Paragraph key={idx}>{highlightText(para)}</Paragraph>
        ))}
      </ProjectCard>
    </Grid>
  );
}
