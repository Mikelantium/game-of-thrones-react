import { useParams } from "react-router-dom"
import {useEffect, useState } from 'react'
import { useContext } from 'react' 
import { MyContext } from '../../shared/MyContext'
import axios from 'axios'
import '../../App.css';




export default function CharactersDetailPage() {
    const {id} = useParams()
    const {t, changeLanguage} = useContext(MyContext)    
    
    
    const [characters, setCharacters] = useState([])
    const [imageHouse, setimageHouse] = useState("")
    
    useEffect(() => {
       getCharacters();       
     },[id])


    const getCharacters = async() =>{
      const character = await axios(`http://localhost:3000/characters/${id}`)    
      
      getHouse(character.data.house)
      
      
      setCharacters(character.data)
      
    }

    const getHouse = async(houseName) =>{
      //http://localhost:3000/houses?name=Stark
      const resultado = await axios(`http://localhost:3000/houses?name=${houseName}`)
      setimageHouse(resultado.data[0].image);
    }

    return  <>
    {characters && 
    <div> 
    <img src={`http://localhost:3000/${characters.image}`} alt={characters.name} className="img-small"/>
     
     <h2> {characters.house} </h2>
     
     
     <div className="character-info"> 

     <div>
      <h3> {t("t-house")} </h3>
      <img src={`http://localhost:3000/${imageHouse}`} alt={characters.name} className="img-small"/> 
    </div>
    <div>

    <div>
    <h3> {t("t-alianzas")} </h3>
    <ul>
      {characters.alliances && characters.alliances.map((item) => <li>{item}</li>)}
    </ul>
    </div>
    
    
    </div>
    
     <div> 
        <h3> {t("t-episodes")} </h3>
        <ul>
          {characters.episodes && characters.episodes.map((item) => <li>{item}</li>)}
        </ul>
    </div>

     <div> 
        <h3> {t("t-parents")} </h3>
        <ul>
          {characters.parents && characters.parents.map((parent) => <li>{parent}</li>)}
        </ul>
    </div>  

    <div> 
        <h3> {t("t-siblings")} </h3>
        <ul>
          {characters.siblings && characters.parents.map((sibling) => <li>{sibling}</li>)}
        </ul>
    </div>  

    <div> 
        <h3> {t("t-titles")} </h3>
        <ul>
          {characters.titles && characters.titles.map((title) => <li>{title}</li>)}
        </ul>
    </div>  

    </div>
    </div>}

    </>
}


