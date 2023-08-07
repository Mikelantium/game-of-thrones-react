import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CharactersPage.scss";
import SearchText from '../../components/SearchText/SearchText';
import { Link } from "react-router-dom";
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';



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
   <SimpleBarReact style={{ height:  '80vh', width: "100%"}}>
   <div className='container-characters'>
            {charactersCopy.map((character, index) => (
                <div className='characters' key={index}>
                <Link to={`/characters/${character.id}`}>
                    <img src={`http://localhost:3333/${character.image}`} alt={character.name} /> </Link> 
                    <h2>{character.name}</h2>
                    
                </div>
            ))}
            </div>
        </SimpleBarReact>
        </div>
        

        
        </>
    );
}

export default CharactersPage;
