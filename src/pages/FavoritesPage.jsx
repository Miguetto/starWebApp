import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const FavoritesPage = () => {
  const { 
    favorites,
    isFavorite,
    handleFavoriteClick,
   } = useContext(DataContext);

  return (
    <div>
      <h1>Personajes favoritos:</h1>
      {favorites.length === 0 ? (
        <p>No tienes aún personajes favoritos.</p>
      ) : (
        <ul>
          {favorites.map((character) => (
            <li key={character.url}>
              {character.name}
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleFavoriteClick(character)}>
                {isFavorite(character) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
              </button>

            </li>

          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;