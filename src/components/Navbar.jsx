import React, { useContext } from 'react'
import { MyContext } from '../shared/MyContext'
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    const {t, changeLanguage} = useContext(MyContext)
  return (
    <nav>
        {/* <button onClick={() => changeLanguage('es')}>{t('lang_es')}</button> */}
        {/* <button onClick={() => changeLanguage('en')}>{t('lang_en')}</button> */}
        <div className='flex-jst-right'>
          <img src="reino-unido.png" alt="" onClick={() => changeLanguage('en')}/>
          <img src="espana.png" alt="" onClick={() => changeLanguage('es')}/>
        </div>
        

    </nav>
  )
}

export default Navbar