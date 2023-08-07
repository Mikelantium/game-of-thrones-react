import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CharactersPage.scss";
import NavbarFooter from '../../components/NavbarFooter';
import SearchText from '../../components/SearchText';
import { Link } from "react-router-dom";


const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [charactersCopy, setCharactersCopy] = useState([]);

const arrayCharacter = [...characters];
    const getCharacters = async () => {
        const resultado = await axios('http://localhost:3333/characters');
        setCharacters(resultado.data);
    }

    useEffect(() => {
        getCharacters();
    }, [])
    useEffect(() => {
      setCharactersCopy([...characters]);
  }, [characters])

  const filteredCharacters = (value) => {

    const filtered = characters.filter((character => character.name.toLowerCase().includes(value.toLowerCase())));
    console.log(filtered);
    if (filtered.length > 0) {
      setCharactersCopy ([...filtered])
    } else {
      setCharactersCopy([...arrayCharacter]);
    }

}

    return (   <>
    <SearchText search = {filteredCharacters}/>
   <div className='container'>
            {charactersCopy.map((character, index) => (
                <div className='container-characters' key={index}>

                <Link to={`/characters/${character.id}`}>
                    <img src={`http://localhost:3333/${character.image}`} alt={character.name} /> </Link> 
                    <h2>{character.name}</h2>
                    
                </div>
            ))}
        </div>
        
          

        <NavbarFooter/>
        </>
    );
}

export default CharactersPage;
