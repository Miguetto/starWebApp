import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export const CharactersList = () => {

    const [search, setSearch] = useState('');
    const {
        characters,
        handdlerCharacters,
        handleScrollTop,
        page,
        isFavorite,
        handleFavoriteClick,
    } = useContext(DataContext);

    return (
        <>
            <h1 className="text-3xl font-semibold">Personajes Star Wars</h1>
            <input
                type="text"
                placeholder="Buscar personaje..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <section>
                {
                    characters.filter((character) =>
                        character.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(character => (
                        <li key={character.url}>
                            <Link to={`/character/${character.url.split('/')[5]}/`}>
                                {character.name}
                            </Link>
                            <button
                                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => handleFavoriteClick(character)}>
                                {isFavorite(character) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                            </button>
                        </li>
                    ))}

            </section>



            <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                disabled={page === null}
                onClick={() => handdlerCharacters()}
            >
                Mostrar más
            </button>
            <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                disabled={page !== null}
                onClick={handleScrollTop}
            >
                Subir
            </button>
        </>
    )
}
