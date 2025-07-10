// components/Certifications.tsx
import styled from 'styled-components';
import { FaCertificate } from 'react-icons/fa';

type CertItem = {
  title: string;
};

type Props = {
  data: CertItem[];
};

const Section = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  padding: 1rem 1rem; 
  width: 1000px; 
  margin: 0 auto;  
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  min-width: 80px;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;



const Card = styled.div`
 background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  padding:1.5rem 1.2rem;
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

  h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: #f2f2f2;
    margin: 0;

    svg {
      margin-right: 0.6rem;
      color: #fcd34d;
    }
  }
`;

export default function Certifications({ data }: Props) {
  return (
    <Section>
      <Grid>
        {data.map((cert, index) => (
          <Card key={index}>
            <h3><FaCertificate /> {cert.title}</h3>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
