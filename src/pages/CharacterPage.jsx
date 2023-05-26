import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharactersListService from "../services/CharactersListService";

export const CharacterPage = () => {
  const { characterId } = useParams();
  
  const [character, setCharacter] = useState(null);

  const fetchCharacter = async () => {
    try {
      const res = await CharactersListService.getCharacter(characterId);
      setCharacter(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, [characterId]);

  return (
    <div>
      <h1>Nombre: {character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
    </div>
  );
}
