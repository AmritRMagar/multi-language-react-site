import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const[t,i18n] = useTranslation("global");

  const handleChangeLanguage = (lang: string) =>{
    i18n.changeLanguage(lang);
  }

  return(
    <div>
      <h1>
        {t("header.message")}
      </h1>
      <button onClick={() => handleChangeLanguage("en")}>EN</button>
      <button onClick={() => handleChangeLanguage("es")}>ES</button>
      <button onClick={() => handleChangeLanguage("np")}>NP</button>
    </div>
  )
};

export default Header