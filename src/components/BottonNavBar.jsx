import React, { useContext } from 'react'
import { MyContext } from '../shared/MyContext'
import { NavLink } from "react-router-dom";


  import "../App.css";

const BottonNavBar = () => {
    const {t, changeLanguage} = useContext(MyContext)
  return  <>
  

    
    <nav>
        <div className='flex-sp-btw'>
        <NavLink to="/characters" className={({ isActive }) => isActive ? "active" : "" } > <span className='GoT-font'> {t("t-character")} </span> </NavLink>
        <NavLink to="/houses" className={({ isActive }) => isActive ? "active" : ""}> <span className='GoT-font'>  {t("t-houses")} </span> </NavLink>
        <NavLink to="/chronology" className={({ isActive }) => isActive ? "active" : ""}> <span className='GoT-font'> {t("t-cronology")} </span></NavLink>
        </div>
    </nav>
    
    
  
  </>
}

export default BottonNavBar