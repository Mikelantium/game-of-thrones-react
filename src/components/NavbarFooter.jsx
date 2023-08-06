import { NavLink } from "react-router-dom";

const NavbarFooter = () => {

  return (
    <nav>
        <NavLink to="/characters" className={({ isActive }) => isActive ? "active" : ""}>Personajes</NavLink>
        <NavLink to="/houses" className={({ isActive }) => isActive ? "active" : ""}>Casas</NavLink>
        <NavLink to="/chronology" className={({ isActive }) => isActive ? "active" : ""}>Cronología</NavLink>
    </nav>
  )
}

export default NavbarFooter