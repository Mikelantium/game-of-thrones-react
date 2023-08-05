import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ChonologyGallery from '../../components/ChonologyGallery'
import FilterOrder from '../../components/FilterOrder'

const ChronologyPage = () => {
    const [characters, setCharacters] = useState([])
    const [ maxAge, setMaxAge] = useState([0])
    const [ minAge, setMinAge] = useState([0])


// Ordena por Edad Descendente
  const sortCharacterByAgeDesc = () => {
    
    console.log('Estoy en sortCharacterByAgeDesc');
    
    // Hago copia en characters
    const arrayCharacters = [...characters]

    // Ordeno por edad descendente. 
    const CharactersSortedByAgeDesc = arrayCharacters.sort((a,b) => {
      if (a.age < b.age){
        return 1;
      }

      if (a.age > b.age) {
        return -1;
      }

      return 0;

    }
    )

    console.log('Ordenado Descendente');
    console.log(CharactersSortedByAgeDesc);
    console.log('la edad maxima es: ', arrayCharacters[0].age)
    setMaxAge(arrayCharacters[0].age)
    setCharacters([...arrayCharacters])
  }

// Ordena por Edad Ascendente
const sortCharacterByAgeAsc = () => {
    
    console.log('Estoy en sortCharacterByAgeAsc');
    
    // Hago copia en characters
    const arrayCharacters = [...characters]

    // Ordeno por edad descendente. 
    const CharactersSortedByAgeDesc = arrayCharacters.sort((a,b) => {
      if (a.age < b.age){
        return -1;
      }

      if (a.age > b.age) {
        return 1;
      }

      return 0;

    }
    )
    console.log('Ordenado ascendente');
    console.log(CharactersSortedByAgeDesc);
    setMinAge(arrayCharacters[0].age)
    setCharacters([...arrayCharacters])
  }  
    
    const formatCharacter = (characters) => {
        console.log('Estoy en formatCharacter');

        const formatedCharacters = characters.map((character) => {
            return {
               name: character.name, 
               age: character.age, 
               image: character.image

            }
       });

// Ordenar por edad ascendente. 
       formatedCharacters.sort((a, b) => {
            if (a.age < b.age){
                return -1;
            }

            if (a.age > b.age) {
                return 1;
            }

            return 0;
       })

       // Elimina los personajes sin edad informada. 
       let characterWithAge = formatedCharacters.filter(character => 
        character.age > 0
      )

      console.log('Personajes con edad informada: ', characterWithAge);
       
       setCharacters(characterWithAge)
    }
// Obtengo todos los personajes
    const getCharacters = async() =>{
      const resultado = await axios('http://localhost:3000/characters')
      console.log(resultado.data)
      formatCharacter(resultado.data)
      
    }

    useEffect(() => {
      getCharacters();
      
    },[])
  
  return (
  <>    
    
    <h1>Estoy en ChronologyPage </h1>
    
    <p> Edad Máxima: {maxAge} </p>
    <p> Edad Mínima: {minAge} </p>
    
    <FilterOrder sortDataDesc={sortCharacterByAgeDesc} sortDataAsc={sortCharacterByAgeAsc}/>     
    {characters && <ChonologyGallery data = {characters}/>}
  </>
  )
}

export default ChronologyPage