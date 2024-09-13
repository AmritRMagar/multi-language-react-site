import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

const LanguageSelector = styled.select`
  background-color: #444;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

function Navbar() {
  const[t,i18n] = useTranslation("global");

  const handleChangeLanguage = (lang: string) =>{
    i18n.changeLanguage(lang);
  }
  return (
    <NavContainer>
      <NavList>
        <NavItem><NavLink href="/">{t("header.nav1")}</NavLink></NavItem>
        <NavItem><NavLink href="/about">{t("header.nav2")}</NavLink></NavItem>
        <NavItem><NavLink href="/contact">{t("header.nav3")}</NavLink></NavItem>
      </NavList>
      <LanguageSelector onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="en" >EN</option>
        <option value="np" >NP</option>
        <option value="es" >ES</option>
      </LanguageSelector>
    </NavContainer>
  );
}

export default Navbar;