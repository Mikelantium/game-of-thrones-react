import React, { useContext } from 'react'
import { MyContext } from '../shared/MyContext'
import { NavLink, useLocation, Link} from "react-router-dom";
import "../App.css";

const Navbar = () => {
    const {t, changeLanguage} = useContext(MyContext)
    const location = useLocation();
    console.log('Estoy en: ', location.pathname);

    let showBackButton = false
    let backPage = ""

    if (location.pathname.includes("/characters/")){
       showBackButton = true
       backPage = '/characters'
    }
    if (location.pathname.includes("/houses/")){
      showBackButton = true
      backPage = '/houses'
    }
    

    console.log('showBackButton: ', showBackButton);
    console.log('backPage: ', backPage);

  
  return (
    <nav>
        <div className='flex-jst-right'>
          
          <img src="left-arrow.png" alt="back-icon" /> 

          {/* Si no estoy en Home, muestro el botón Home */}
          {location.pathname !== "/" && <Link to={"/"}> <img src="home.png" alt="home-icon" /> </Link> }

          
          
          <img src="reino-unido.png" alt="" onClick={() => changeLanguage('en')}/>
          <img src="espana.png" alt="" onClick={() => changeLanguage('es')}/>
        </div>
        

    </nav>
  )
}

export default Navbar