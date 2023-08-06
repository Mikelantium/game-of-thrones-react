import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HousesDetailPage() {
  const { id } = useParams();

  console.log("Recibo el id = ", id);

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses();
  }, [id]);

  const getHouses = async () => {
    const house = await axios(`http://localhost:3333/houses/${id}`);
    console.log("Muestro la casa", house.data);
    setHouses(house.data);
  };

  return (
    <>
      <Link to="/houses">
        <button>Volver</button>
      </Link>

      {houses && (
        <div>
          <img
            src={`http://localhost:3333/${houses.image}`}
            alt={houses.name}
          />
          <h2>{houses.name}</h2>

          <div className="character-info">
            <div>
              <div>
                <h3> SEDE </h3>
                <p>{houses.settlement}</p>
              </div>
            </div>

            <div>
              <h3> REGIÓN </h3>
              <p>{houses.region}</p>
            </div>

            <div>
              <h3> ALIANZAS </h3>
              <ul>
     {houses.alliances && houses.alliances.map((alliances) => <li>{alliances}</li>)}
   </ul>
            </div>

            <div>
              <h3> RELIGIONES </h3>
              <ul>
     {houses.religions && houses.religions.map((religions) => <li>{religions}</li>)}
   </ul>
            </div>

            <div>
              <h3> FUNDACIÓN </h3>
              <p>{houses.foundation}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
