import React from 'react'


const CharactersPage = ({data}) => {
  return (
    <div>
     {data && data.map ((character, index) => (
        <div key={index}>
            <img src= {`http://localhost:3333/${character.image}`} alt={character.name}/>
            <h2>{character.name}</h2>
        </div>
    ))} 
    </div>
  )
}

export default CharactersPage
