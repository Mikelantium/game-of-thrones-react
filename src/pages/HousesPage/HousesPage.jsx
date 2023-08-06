import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarFooter from '../../components/NavbarFooter';
import SearchText from '../../components/SearchText';
import { Link } from 'react-router-dom';

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
    <div>
<SearchText search = {filteredHouses}/>
        <div className='container'>
            {housesCopy.map((house, index) => (
                <div className='container-characters' key={index}>

                <Link to={`/houses/${house.id}`}>
                    <img src={`http://localhost:3333/${house.image}`} alt={house.name} /> </Link> 
                    <h2>{house.name}</h2>
                    
                </div>
            ))}
        </div>
            <NavbarFooter/>
        </div>
    );
}

export default HousesPage;
