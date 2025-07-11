// components/Navbar.tsx
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 1.2rem 2rem;
  background: #210025;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: white;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Logo>Karunya</Logo>
      <Menu>
       <Link href="/">Home</Link>
        <Link href="/Education">Education</Link>
        <Link href="/TechnicalStack">Technical Skills</Link>
        <Link href="/Certifications">Certifications</Link>
        <Link href="/AIProjects">AI Projects</Link>
        

      </Menu>
    </Nav>
  );
}
