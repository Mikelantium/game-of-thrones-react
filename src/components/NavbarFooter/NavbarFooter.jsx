import { NavLink } from "react-router-dom";
import "./NavbarFooter.scss";
import { useLocation, Link} from "react-router-dom";

const NavbarFooter = () => {
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
        <NavLink to="/characters" className= "personajes" activeClassName= "active">PERSONAJES</NavLink>
        <NavLink to="/houses" className= "casas" activeClassName= "active">CASAS</NavLink>
        <NavLink to="/chronology" className= "cronologia" activeClassName= "active">CRONOLOGIA</NavLink>


    </nav>
    </div>
  )

}


export default NavbarFooter