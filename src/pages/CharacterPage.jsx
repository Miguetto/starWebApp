import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharactersListService from "../services/CharactersListService";
import { DataContext } from "../context/DataContext";

export const CharacterPage = () => {

  const { characterId } = useParams();
  const {
    characters,
    favorites,
    addToFavorites,
    removeFromFavorites
  } = useContext(DataContext);

  const character = characters.find((char) => char.url.split('/')[5] === characterId);

  const isFavorite = (character) => {
    return favorites.some((favCharacter) => favCharacter.url === character.url);
  };

  const handleFavoriteClick = (character) => {
    if (isFavorite(character)) {
      removeFromFavorites(character);
    } else {
      addToFavorites(character);
    }
  };

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
