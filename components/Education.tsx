import styled from 'styled-components';

type EducationItem = {
  title: string;
  school: string;
  year: string;
  score: string;
  description?: string;
};

type Props = {
  data: EducationItem[];
};

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
  margin-bottom: 1rem;
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
  margin-top: 2rem;
  color: #ccc;
  font-size: 0.9rem;

  &.hover-details {
    pointer-events: none;
  }
`;

export default function EducationTimeline({ data }: Props) {
  return (
    <Timeline>
      {data.map((item, index) => (
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
  );
}
