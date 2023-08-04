import React, { useContext } from 'react'
import { MyContext } from '../shared/MyContext'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const {t, changeLanguage} = useContext(MyContext)
  return (
    <nav>
        <button onClick={() => changeLanguage('es')}>{t('lang_es')}</button>
        <button onClick={() => changeLanguage('en')}>{t('lang_en')}</button>

        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/characters" className={({ isActive }) => isActive ? "active" : ""}>Characters</NavLink>
    </nav>
  )
}

export default Navbar