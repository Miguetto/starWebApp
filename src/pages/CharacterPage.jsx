import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import DataListService from "../services/DataListService";

export const CharacterPage = () => {

  const [character, setCharacter] = useState(null);
  const [planet, setPlanet] = useState();
  const [imageError, setImageError] = useState(false);
  const { characterId } = useParams();

  const {
    characters,
    isFavorite,
    handleFavoriteClick,
    handleGoBack,
  } = useContext(DataContext);


  const getPlanetCharacter = async () => {

    const character = characters.find(
      (char) => char.url.split("/")[5] === characterId
    );

    if (character) {
      setCharacter(character);

      try {
        const res = await DataListService.getPlanet(character.homeworld);
        setPlanet(res.data);
      } catch (error) {
        console.error("Error en la petición:", error);
        return 'Desconocido';
      }
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    getPlanetCharacter();
  }, [characterId, characters]);

  if (!character || !planet) {
    return <div><Typography className="ml-8 mt-8 mb-8" variant="h3">Cargando...</Typography></div>;
  };

  return (
    <div className="mt-8 grid place-items-center">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
          alt={character.name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Género: </span> {character.gender}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Color de pelo: </span> {character.hair_color}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Altura: </span> {character.height}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Peso: </span> {character.mass}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Planeta: </span> {planet.name}</p>

          {planet && !imageError && (
            <div className="flex flex-col items-center justify-between p-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.split('/')[5]}.jpg`}
                onError={handleImageError}
                alt={planet.name}
              />
            </div>
          )}
          <button className="px-6 py-4 flex justify-center" onClick={() => handleFavoriteClick(character)}>
            <FontAwesomeIcon
              icon={isFavorite(character) ? faHeart : faHeartCrack}
              className={`${isFavorite(character) ? 'text-red-500' : 'fill-none'}`}
            />
          </button>
          <button onClick={handleGoBack} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Volver
          </button>

        </div>

      </div>

    </div>
  );
};

export default CharacterPage;
