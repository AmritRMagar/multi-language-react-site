
import { useTranslation } from "react-i18next";
import "../../src/App.css"

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
         </div>
  )
};

export default Header