// components/NavBar.tsx
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #590059ff;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fbd46d;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin: 4px 0;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #330033;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding: 1rem 2rem;
  }
`;

// This styles the Next.js Link directly
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;

  &:hover {
    color: #fbd46d;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fbd46d;
    transition: width 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>Karunya</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/Education">Education</NavLink>
        <NavLink href="/TechnicalStack">Technical Skills</NavLink>
        <NavLink href="/Certifications">Certifications</NavLink>
        <NavLink href="/AIProjects">AI Projects</NavLink>
      </Menu>
    </Nav>
  );
}
