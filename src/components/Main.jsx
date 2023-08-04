import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../shared/MyContext'
import axios from 'axios'
import CharactersPage from '../pages/CharactersPage/CharactersPage';

const Main = () => {
    const  {t} = useContext(MyContext);
    const [characters, setCharacters] = useState([])

    const getCharacters = async() =>{
      const resultado = await axios('http://localhost:3333/characters')
      setCharacters(resultado.data)
      console.log(resultado.data)
    }
    useEffect(() => {
      getCharacters();
    },[])
  return (<>
    <CharactersPage data = {characters}/>
    <div>{t('counter_text')}: </div>
    </>
  )
}

export default Main