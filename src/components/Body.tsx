import { useTranslation } from "react-i18next";

const Body = () => {
  const[t] = useTranslation("global");

  return(
    <div>
      <p>
        {t("home.body")}
      </p>
    </div>
  );

};

export default Body;