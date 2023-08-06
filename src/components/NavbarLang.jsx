import React, { useContext } from "react";
import { MyContext } from "../shared/MyContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, changeLanguage } = useContext(MyContext);
  return (
    <nav>
      <Link to="/">
        <button>⌂</button>
      </Link>
      <button onClick={() => changeLanguage("es")}>{t("lang_es")}</button>
      <button onClick={() => changeLanguage("en")}>{t("lang_en")}</button>
    </nav>
  );
};

export default Navbar;
