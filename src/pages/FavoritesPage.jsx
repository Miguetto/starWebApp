import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { CharacterCard } from '../components/CharacterCard';
import { SearchList } from '../components';
import { Typography } from "@material-tailwind/react";

const FavoritesPage = () => {

  const [search, setSearch] = useState('');
  const {
    favorites,
    handleScrollTop,
    handleGoBack,
  } = useContext(DataContext);

  console.log(favorites)

  return (
    <>
      <section className="sm:mr-1 md:mr-2 lg:mr-3 sm:ml-1 md:ml-2 lg:ml-3">
        <Typography className="mt-8 mb-8" variant="h5">Personajes favoritos: </Typography>
        {favorites.length === 0 ? (
          <Typography className="mt-8 mb-8" variant="small">No tienes aún personajes favoritos.</Typography>

        ) : (
          <div>
            <form className="mb-3">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
              <div className="relative">
                <SearchList search={search} setSearch={setSearch} />
              </div>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
              {
                favorites.filter((character) =>
                  character.name.toLowerCase().includes(search.toLowerCase())
                ).map((character) => (
                  <CharacterCard key={character.url} character={character} />
                ))
              }
            </div>
          </div>
        )}
      </section>
      <div className="flex justify-center">
        <button onClick={handleGoBack} className="mt-4 mb-4 ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Volver
        </button>
        {favorites.length !== 0 ? (
          <button
            className="flex justify-center mt-4 mb-4 ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            style={{ display: favorites.length !== 10 ? 'none' : '' }}
            onClick={handleScrollTop}
          >
            Subir
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;