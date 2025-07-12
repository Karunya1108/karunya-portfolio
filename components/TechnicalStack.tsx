import styled from 'styled-components';
import { FaCode, FaPaintBrush, FaLaptopCode } from 'react-icons/fa';

type Props = {
  data: string[];
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  margin-top: 8rem;
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  padding: 1.5rem 1.2rem;
  min-width: 160px;
  border-radius: 14px;
  color: white;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }

  span {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.5rem;
    color: #c3b4f3;
  }

  p {
    font-size: 1rem;
    color: #eee;
  }
`;

export default function TechnicalStack({ data }: Props) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <Section>
      <Grid>
        {data.map((skill, index) => (
          <SkillCard key={index}>
            <span>
              {skill.toLowerCase().includes('ui') ? (
                <FaPaintBrush />
              ) : skill.toLowerCase().includes('python') ? (
                <FaLaptopCode />
              ) : (
                <FaCode />
              )}
            </span>
            <p>{skill}</p>
          </SkillCard>
        ))}
      </Grid>
    </Section>
  );
}
