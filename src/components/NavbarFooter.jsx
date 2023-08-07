import { NavLink } from "react-router-dom";
import "./NavbarFooter.scss";

const NavbarFooter = () => {

  return (
    <nav className="text-container">
        <NavLink to="/characters" className= "personajes" activeClassName= "active">PERSONAJES</NavLink>
        <NavLink to="/houses" className= "casas" activeClassName= "active">CASAS</NavLink>
        <NavLink to="/chronology" className= "cronologia" activeClassName= "active">CRONOLOGIA</NavLink>


    </nav>
  )
}

export default NavbarFooter