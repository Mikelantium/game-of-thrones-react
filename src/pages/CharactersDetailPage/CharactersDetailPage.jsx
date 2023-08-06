import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function CharactersDetailPage() {
    const {id} = useParams()

    console.log('Recibo el id = ', id);
    const [characters, setCharacters] = useState([])
    const [houses, setHouses] = useState([])

    useEffect(() => {
       getCharacters();
       getHouses();
     },[id])


    const getCharacters = async() =>{
      const character = await axios(`http://localhost:3333/characters/${id}`)
      console.log('Muestro el caracter', character.data);
      setCharacters(character.data)

    }

    const getHouses = async() =>{
        const house = await axios(`http://localhost:3333/houses`)
        console.log('Muestro el caracter', house.data);
        setHouses(house.data)
  
      }



return  <>
<Link to= "/characters">
  <button>Volver</button>
</Link>

    {characters && 
    <div> 
    <img src={`http://localhost:3333/${characters.image}`} alt={characters.name}/>
<h2>{characters.name}</h2>
     
     <div className="character-info"> 

<div>
 <h3> CASA </h3>
 {houses.map((house) => {
    if (house.name === characters.house) {
        return (
            <div>
            <img src={`http://localhost:3333/${house.image}`} alt={house.name}/>
            </div>
        )
    }
 })}
 <h2> {characters.house} </h2>
</div>
<div>

<div>
<h3> ALIANZAS </h3>
<ul>
 {characters.alliances && characters.alliances.map((item) => <li>{item}</li>)}
</ul>
</div>


</div>

<div> 
   <h3> APARICIONES </h3>
   <ul>
     {characters.episodes && characters.episodes.map((item) => <li>{item}</li>)}
   </ul>
</div>

<div> 
   <h3> PADRE </h3>
   <ul>
     {characters.parents && characters.parents.map((parent) => <li>{parent}</li>)}
   </ul>
</div>

<div> 
   <h3> DESCENDIENTES </h3>
   <ul>
     {characters.siblings && characters.parents.map((sibling) => <li>{sibling}</li>)}
   </ul>
</div>

<div> 
   <h3> TITULOS</h3>
   <ul>
     {characters.titles && characters.titles.map((title) => <li>{title}</li>)}
   </ul>
</div>

</div>
     </div>}
     </>
}
