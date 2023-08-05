import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import HousesGallery from '../../components/HousesGallery'
import { Link } from "react-router-dom";


const HousesPage = () => {
    const [houses, setHouses] = useState([])

    const getHouses = async() =>{
      const resultado = await axios('http://localhost:3000/houses')
      setHouses(resultado.data)
      console.log(resultado.data)
    }
    useEffect(() => {
        getHouses();
    },[])
  
  return (
  <>    
    {houses && <HousesGallery data = {houses}/>}
    
  </>
  )
}

export default HousesPage