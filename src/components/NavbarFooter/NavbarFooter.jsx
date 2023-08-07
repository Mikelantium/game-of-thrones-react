import { NavLink } from "react-router-dom";
import "./NavbarFooter.scss";
import { useLocation} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavbarFooter = () => {
  const {t} = useTranslation();
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname.includes("/houses/")) {
    return <> </>
  } 
  if (location.pathname.includes("/characters/")) {
    return <> </>
  } 
 
    
  return (
    <div className="footer-container">
    <nav className="text-container">
        <NavLink to="/characters" className= "personajes" activeClassName= "active">{t("characters")}</NavLink>
        <NavLink to="/houses" className= "casas" activeClassName= "active">{t("houses")}</NavLink>
        <NavLink to="/chronology" className= "cronologia" activeClassName= "active">{t("chronology")}</NavLink>


    </nav>
    </div>
  )

}


export default NavbarFooter