import styled from 'styled-components';

type CertificationItem = {
  title: string;
  description: string;
    issuer: string;   // ✅ Add this
  year: string;     // ✅ And this
};

type Props = {
  data: CertificationItem[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.8rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.03);
  color: white;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
    border-color: #9b59b6;
    box-shadow: 0 0 25px rgba(155, 89, 182, 0.3);
  }

  &:hover .description {
    max-height: 500px;
    opacity: 1;
  }
`;

const Title = styled.div`
  font-weight: 600;
  color: #fbd46d;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '🌟';
    font-size: 1.3rem;
  }
`;

const Meta = styled.div`
  font-size: 0.95rem;
  color: #ccc;
  margin-top: 0.4rem;
`;

const Description = styled.p`
  color: #ddd;
  font-size: 1rem;
  margin-top: 0.8rem;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s ease;
`;

export default function Certifications({ data }: Props) {
  return (
    <Container>
      {data.map((cert, index) => (
        <Card key={index}>
          <Title>{cert.title}</Title>
          <Meta>{cert.issuer} — {cert.year}</Meta>
          <Description className="description">{cert.description}</Description>
        </Card>
      ))}
    </Container>
  );
}
