import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export const CharacterPage = () => {

  const { characterId } = useParams();
  const {
    characters,
    isFavorite,
    handleFavoriteClick,
  } = useContext(DataContext);

  const character = characters.find((char) => char.url.split('/')[5] === characterId);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Nombre: {character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <button 
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => handleFavoriteClick(character)}>
        {isFavorite(character) ? 'Quiar de favoritos' : 'Añadir a favoritos'}
      </button>
    </div>
  );
}
