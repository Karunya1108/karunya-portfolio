import React, { useState } from 'react';
import styled from 'styled-components';

type EducationItem = {
  year: string;
  title: string;
  school: string;
  score: string;
  description: string;
};

type Props = {
  data: EducationItem[];
};

const TimelineContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: #330033;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='585' height='585' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1.9'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='12'/%3E%3Ccircle cx='539' cy='269' r='12'/%3E%3Ccircle cx='603' cy='493' r='12'/%3E%3Ccircle cx='731' cy='737' r='12'/%3E%3Ccircle cx='520' cy='660' r='12'/%3E%3Ccircle cx='309' cy='538' r='12'/%3E%3Ccircle cx='295' cy='764' r='12'/%3E%3Ccircle cx='40' cy='599' r='12'/%3E%3Ccircle cx='102' cy='382' r='12'/%3E%3Ccircle cx='127' cy='80' r='12'/%3E%3Ccircle cx='370' cy='105' r='12'/%3E%3Ccircle cx='578' cy='42' r='12'/%3E%3Ccircle cx='237' cy='261' r='12'/%3E%3Ccircle cx='390' cy='382' r='12'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  color: #f0f0f0;
`;


const Title = styled.h1`
  text-align: center;
  color: #fbd46d;
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;



const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;


  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 10px;
    background-color: #fbd46d;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-left: 40px;
`;

const Dot = styled.div`
  position: absolute;
  left: -24px;
  top: 12px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fbd46d;
`;
const TimelineCard = styled.div<{ active: boolean }>`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease;

  ${({ active }) =>
    active &&
    `
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  `}
`;


const Box = styled.div<{ expanded: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

   &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.3);
    border-color: #9b59b6;
  }
  h2 {
    margin: 0;
    font-size: 1.4rem;
    color: #fff;
  }

  h4 {
    margin: 0.3rem 0;
    font-weight: 500;
    color:#ffff;
  }

  p {
    margin-top: 0.5rem;
    display: ${({ expanded }) => (expanded ? 'block' : 'none')};
    font-size: 1rem;
    color: #e0e0e0;
  }
`;



export default function EducationTimeline({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <TimelineContainer>
      <Title>Education</Title>
      <Timeline>
        {data.map((item, index) => (
          <TimelineItem key={index} onClick={() => handleToggle(index)}>
            <Dot />
            <Box expanded={openIndex === index}>
              <h4>{item.year}</h4>
              <h2>{item.title}</h2>
              <p>
                <strong>School:</strong> {item.school} <br />
                <strong>Marks:</strong> {item.score} <br />
                {item.description}
              </p>
            </Box>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
}
