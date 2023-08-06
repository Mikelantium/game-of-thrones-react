import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarFooter from '../../components/NavbarFooter';

const ChronologyPage = () => {
    const [chronologies, setChronology] = useState([]);

    const getCharacters = async () => {
        const resultado = await axios('http://localhost:3333/characters');
        setChronology(resultado.data);
    }

    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <div>
            {chronologies.map((chronology, index) => (
                <div key={index}>
                <h2>{chronology.age}</h2>
                <h2>{chronology.name}</h2>
                    <img src={`http://localhost:3333/${chronology.image}`} alt={chronology.name} />
                </div>
            ))}
            <NavbarFooter/>
        </div>
    );
}

export default ChronologyPage;
