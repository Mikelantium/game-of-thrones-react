import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchText from '../../components/SearchText/SearchText';
import { Link } from 'react-router-dom';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const HousesPage = () => {
    const [houses, setHouses] = useState([]);
    const [housesCopy, setHousesCopy] = useState([]);

    const arrayHouses = [...houses];
    const getHouses = async () => {
        const resultado = await axios('http://localhost:3333/houses');
        setHouses(resultado.data);
    }

    useEffect(() => {
        getHouses();
    }, [])
    useEffect(() => {
        setHousesCopy([...houses]);
    }, [houses])

    const filteredHouses = (value) => {

        const filtered = houses.filter((house => house.name.toLowerCase().includes(value.toLowerCase())));
        console.log(filtered);
        if (filtered.length > 0) {
            setHousesCopy ([...filtered])
        } else {
            setHousesCopy([...arrayHouses]);
        }
    
    }

    return ( 
        <>
<SearchText search = {filteredHouses}/>
        <div className='container'>
        <SimpleBarReact style={{ height:  '80vh', width: "100%"}}>
        <div className='container-characters'>
            {housesCopy.map((house, index) => (
                
                <div className='houses' key={index}>
                <Link to={`/houses/${house.id}`}>
                    <img src={`http://localhost:3333/${house.image}`} alt={house.name} /> </Link> 
                    <h2>{house.name}</h2>
                    </div>
                
            ))}
            </div>
            </SimpleBarReact>
        </div>
        
        </>
    );
}

export default HousesPage;
