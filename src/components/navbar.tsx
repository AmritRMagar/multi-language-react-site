import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 20px;
    z-index: 999;
  }
`;

const NavItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ff6347; /* Add a hover color for better UX */
  }
`;

const LanguageSelector = styled.select`
  background-color: #444;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Hamburger = styled.div<{ open: boolean }>`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: transform 0.3s;
  }

  ${({ open }) =>
    open &&
    `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <NavContainer>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavList open={open}>
        <NavItem><NavLink href="/">{t("header.nav1")}</NavLink></NavItem>
        <NavItem><NavLink href="/about">{t("header.nav2")}</NavLink></NavItem>
        <NavItem><NavLink href="/contact">{t("header.nav3")}</NavLink></NavItem>
      </NavList>
      <LanguageSelector onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="np">NP</option>
        <option value="es">ES</option>
      </LanguageSelector>
    </NavContainer>
  );
}

export default Navbar;
