import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { CharacterCard } from '../components/CharacterCard';
import { SearchList } from '../components';
import { Typography } from "@material-tailwind/react";

const FavoritesPage = () => {

  const [search, setSearch] = useState('');
  const {
    favorites,
  } = useContext(DataContext);

  return (
    <section className="sm:mr-1 md:mr-2 lg:mr-3 sm:ml-1 md:ml-2 lg:ml-3">
      <Typography className="mt-8 mb-8" variant="h3">Personajes favoritos: </Typography>
      <form className="mb-3">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
        <div className="relative">
          <SearchList search={search} setSearch={setSearch} />
        </div>
      </form>
      {favorites.length === 0 ? (
        <Typography className="mt-8 mb-8" variant="small">No tienes aún personajes favoritos.</Typography>

      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
          {
            favorites.filter((character) =>
              character.name.toLowerCase().includes(search.toLowerCase())
            ).map((character) => (
              <CharacterCard key={character.url} character={character} />
            ))
          }
        </div>
      )}
    </section>
  );
};

export default FavoritesPage;