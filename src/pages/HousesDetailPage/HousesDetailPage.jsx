import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function HousesDetailPage() {
  const {t} = useTranslation ();
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
        <button>{t("back")} </button>
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
                <h3> {t("seat")} </h3>
                <p>{houses.settlement}</p>
              </div>
            </div>

            <div>
              <h3> {t("region")}  </h3>
              <p>{houses.region}</p>
            </div>

            <div>
              <h3> {t("alliances")}  </h3>
              <ul>
     {houses.alliances && houses.alliances.map((alliances) => <li>{alliances}</li>)}
   </ul>
            </div>

            <div>
              <h3> {t("religions")}  </h3>
              <ul>
     {houses.religions && houses.religions.map((religions) => <li>{religions}</li>)}
   </ul>
            </div>

            <div>
              <h3> {t("foundation")}  </h3>
              <p>{houses.foundation}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
