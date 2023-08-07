import React, { useContext } from "react";
import { MyContext } from "../../shared/MyContext";
import { Link } from "react-router-dom";
import "./NavbarLang.scss";

const NavbarLang = () => {
  const { t, changeLanguage } = useContext(MyContext);
  return (
    <nav className="nav">
    <div>
      <Link to="/">
        <img src= "./images/home.png" alt= "home" className="es"/>
      </Link>
      </div>
      <div>
      <img src= "./images/spain.svg" alt= "spain" className="es" onClick={() => changeLanguage("es")}/>
      </div>
      <div>
      <img src= "./images/uk.png" alt= "en" className="es" onClick={() => changeLanguage("en")}/>
      </div>
    </nav>
  );
};

export default NavbarLang;
