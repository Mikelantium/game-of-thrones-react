import React, { useEffect, useState } from "react";
import axios from "axios";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./ChronologyPage.scss";

const ChronologyPage = () => {
  const [chronologies, setChronology] = useState([]);
  const [arrangeOrder, setArrangeOrder] = useState();

  const getCharacters = async () => {
    const resultado = await axios("http://localhost:3333/characters");
    setChronology(
      resultado.data
        .filter((character) => character.age)
        .sort((a, b) => (arrangeOrder ? a.age - b.age : b.age - a.age))
        
    );

    
  };


  useEffect(() => {
    getCharacters();
  }, [arrangeOrder]);

  const changeOrder = () => {
    setArrangeOrder(!arrangeOrder);
  };




  return (
    <div className="container-chronology">
      <div className="margin">
      <SimpleBarReact style={{ height:  '85vh', width: "100%"}}>

        <div>
          <button className="chronology-button" onClick={changeOrder}>
          {/* {chronologies} */}
            {arrangeOrder ? "↓" : "↑"}
          </button>
        </div>
        <div className="characters-container2">
          {chronologies.map((chronology, index) => (
            <div className= "box" key={index}>
              <h2>{chronology.age}</h2>
          
              <h2>{chronology.name}</h2>
              <img
                src={`http://localhost:3333/${chronology.image}`}
                alt={chronology.name}
              />
            </div>
          ))}
        </div>
        {/* {Cierra el margin} */}
        </SimpleBarReact>
      </div>
    </div>
  );
};

export default ChronologyPage;
