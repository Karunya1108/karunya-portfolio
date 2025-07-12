import styled from 'styled-components';
import pageData from '../public/LandingPageData.json';
import LandingHero from '../components/Landing';
import ContentSection from '../components/ContentSection';
import BackgroundParticles from '../components/Particles';
import ContactFormSection from '../components/ContactSection';

const Background = styled.div`
  position: relative;
  overflow: hidden;

  #tsparticles {
    position: fixed; /* changed from absolute to fixed */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }
`;
const SectionBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  margin: 2rem auto;
  border-radius: 20px;
  width: 90%;
  max-width: 1000px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Footer = styled.footer`
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #ccc;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
export default function LandingPage({ data }: LandingPageProps) {
  return (
    <Background>
      <BackgroundParticles />
      <LandingHero
        title={pageData.hero.title}
        paragraphs={pageData.hero.paragraphs}
        typewriterWords={pageData.hero.typewriterWords}
      />
      <ContentSection
        heading={pageData.about.heading}
        paragraphs={pageData.about.paragraphs}
      />
      <SectionBox>
        <ContentSection
          heading={pageData.contact.heading}
          paragraphs={[]}
        />
      </SectionBox>
      <Footer>{pageData.footer?.copyright}</Footer>
    </Background>
  );
}
interface LandingPageProps {
  data: {
    hero: {
      title: string;
      paragraphs: string[];
      typewriterWords: string[];
    };
    about: {
      heading: string;
      paragraphs: string[];
    };
    contact: {
      heading: string;
      form: {
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        buttonText: string;
      };
    };
    footer: {
      copyright: string;
    };
  };
}