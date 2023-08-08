import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CharactersDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams();

  console.log("Recibo el id = ", id);
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getCharacters();
    getHouses();
  }, [id]);

  const getCharacters = async () => {
    const character = await axios(`http://localhost:3333/characters/${id}`);
    console.log("Muestro el caracter", character.data);
    setCharacters(character.data);
  };

  const getHouses = async () => {
    const house = await axios(`http://localhost:3333/houses`);
    console.log("Muestro el caracter", house.data);
    setHouses(house.data);
  };

  return (
    <>
      <Link to="/characters">
        <button className="back-button">{t("back")}</button>
      </Link>

      {characters && (
        <div className="columns">
          <img className="detail-character-image"
            src={`http://localhost:3333/${characters.image}`}
            alt={characters.name}
          />
          <h2>{characters.name}</h2>

          <div className="columns-info">
            <div className="columns-info-display">
              <h3> {t("house")} </h3>
              {houses.map((house) => {
                if (house.name === characters.house) {
                  return (
                    <div>
                      <img className="detail-shield-image"
                        src={`http://localhost:3333/${house.image}`}
                        alt={house.name}
                      />
                    </div>
                  );
                }
              })}
              
            </div>
            <div className="columns-detail">
              <div>
                <h3> {t("alliances")} </h3>
                <ul>
                  {characters.alliances &&
                    characters.alliances.map((item) => <li>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="columns-detail">
              <h3> {t("appearences")} </h3>
              <ul>
                {characters.episodes &&
                  characters.episodes.map((item) => <li>{item}</li>)}
              </ul>
            </div>

            <div className="columns-detail">
              <h3> {t("parent")} </h3>
              <ul>
                {characters.parents &&
                  characters.parents.map((parent) => <li>{parent}</li>)}
              </ul>
            </div>

            <div className="columns-detail">
              <h3> {t("descendents")} </h3>
              <ul>
                {characters.siblings &&
                  characters.parents.map((sibling) => <li>{sibling}</li>)}
              </ul>
            </div>

            <div className="columns-detail">
              <h3> {t("titles")} </h3>
              <ul>
                {characters.titles &&
                  characters.titles.map((title) => <li>{title}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
