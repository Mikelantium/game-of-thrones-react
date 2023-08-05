import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CharacterGallery from '../../components/CharacterGallery'


const CharactersPage = () => {
    const [characters, setCharacters] = useState([])

    const getCharacters = async() =>{
      // const resultado = await axios('http://localhost:3000/characters')
      const resultado = await axios.get('http://localhost:3000/characters')
      setCharacters(resultado.data)
      console.log(resultado.data)
    }
    useEffect(() => {
      getCharacters();
    },[])
  
  return (
  <>    
    {characters && <CharacterGallery data = {characters}/>}
    
  </>
  )
}

export default CharactersPage
