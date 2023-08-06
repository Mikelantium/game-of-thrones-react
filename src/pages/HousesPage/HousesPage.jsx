import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import HousesGallery from '../../components/HousesGallery'
import { Link } from "react-router-dom";


const HousesPage = () => {
    const [houses, setHouses] = useState([])
    const [search, setSearch] = useState("")

    const getHouses = async() =>{
      const resultado = await axios('http://localhost:3000/houses')
      setHouses(resultado.data)
      console.log(resultado.data)
    }
    useEffect(() => {
        getHouses();
    },[])

    const filterHouses = (event) => {
      setSearch(event.target.value)
      

    }
    let results = []
    
    // Si no se han introducido datos de búsqueda, se devuelve el array original. 
    if (!search){
      results = houses

    } else {
      results = houses.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
    }

  
  return (
  <> 
    
    <input type='text'  onChange={filterHouses} ></input>   
    {results && <HousesGallery data = {results}/>}
    
  </>
  )
}

export default HousesPage