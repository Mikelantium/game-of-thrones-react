import React, { useContext } from 'react'
import { MyContext } from '../shared/MyContext'

const Navbar = () => {
    const {t, changeLanguage} = useContext(MyContext)
  return (
    <nav>
        <button onClick={() => changeLanguage('es')}>{t('lang_es')}</button>
        <button onClick={() => changeLanguage('en')}>{t('lang_en')}</button>
    </nav>
  )
}

export default Navbar