import React, { useContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

import axios from 'axios'
import CharacterGallery from '../../components/CharacterGallery'


const CharactersPage = () => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")

    const location = useLocation()
    console.log('Estoy en: ', location.pathname);
    
    const getCharacters = async() =>{
      // const resultado = await axios('http://localhost:3000/characters')
      const resultado = await axios.get('http://localhost:3000/characters')
      setCharacters(resultado.data)
      console.log(resultado.data)
    }

    const filterCharacter = (event) => {
      setSearch(event.target.value)
      console.log(event.target.value);

    }
    let results = []
    
    // Si no se han introducido datos de búsqueda, se devuelve el array original. 
    if (!search){
      results = characters

    } else {
      results = characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
      getCharacters();
    },[])

    console.log(typeof characters);
  
  return (
  <> 
    
    <input type='text'  onChange={filterCharacter} ></input>
    
    {results && <CharacterGallery data = {results}/>}
    
  </>
  )
}

export default CharactersPage
