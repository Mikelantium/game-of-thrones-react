import { useParams  } from "react-router-dom"
import {useEffect, useState, useContext } from 'react'
import { MyContext } from '../../shared/MyContext' 
import axios from 'axios'
import '../../App.css';

export default function HouseDetailPage() {
    const {id} = useParams()
    const {t, changeLanguage} = useContext(MyContext) 

    console.log('Estoy en HouseDeail');
    console.log('El id recibido es:', id);
    
    const [houses, setHouse] = useState([])

    useEffect(() => {
       getHouse();
     },[id])


    const getHouse = async() =>{
      const house = await axios(`http://localhost:3000/houses/${id}`)    
      console.log('House', house.data);
      setHouse(house.data)
      
    }

    
    
    return  <>
    {houses && 
    <div> 
    
    <img src={`http://localhost:3000/${houses.image}`} alt={houses.name} className="img-small"/>
    
    <div className="house-info">

      <div>
        <h3> {t("t-watchword")}  </h3>
      </div>

      <div>
        <h3> {t("t-settlement")} </h3>
        <p> {houses.settlement} </p>
      </div>

      <div>
        <h3> {t("t-region")} </h3>
        <p>{houses.region}</p>
      </div>

      <div>
        <h3> {t("t-alliances")} </h3>
        <ul>
          {houses.alliances && houses.alliances.map((alliance) => <li>{alliance}</li>)}
        </ul>

      </div>

      <div>
        <h3> {t("t-religions")} </h3>
        <ul>
          {houses.religions && houses.religions.map((religions) => <li>{religions}</li>)}
        </ul>

      </div>

      <div>
        <h3> {t("t-foundation")} </h3>
        <p> {houses.foundation} </p>
      </div>


    </div>

    </div>
    
    
    
    
    }

    </>
}

//     "religions": [
//       "Antiguos Dioses del Bosque"
//     ],
//     "foundation": "04/05/-300",
//     "image": "/images/houses/01.webp"
//   },
// */