import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const FavoritesPage = () => {
  const { favorites } = useContext(DataContext);

  return (
    <div>
      <h1>Personajes favoritos:</h1>
      {favorites.length === 0 ? (
        <p>No tienes aún personajes favoritos.</p>
      ) : (
        <ul>
          {favorites.map((character) => (
            <li key={character.url}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;