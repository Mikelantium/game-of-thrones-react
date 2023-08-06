import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarFooter from '../../components/NavbarFooter';

const HousesPage = () => {
    const [houses, setHouses] = useState([]);

    const getHouses = async () => {
        const resultado = await axios('http://localhost:3333/houses');
        setHouses(resultado.data);
    }

    useEffect(() => {
        getHouses();
    }, [])

    return (
        <div>
            {houses.map((house, index) => (
                <div key={index}>
                    <img src={`http://localhost:3333/${house.image}`} alt={house.name} />
                    <h2>{house.name}</h2>
                </div>
            ))}
            <NavbarFooter/>
        </div>
    );
}

export default HousesPage;
