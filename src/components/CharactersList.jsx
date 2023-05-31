import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export const CharactersList = () => {

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
            <section>
                {
                    characters.map(character => (
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
