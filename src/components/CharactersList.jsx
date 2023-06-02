import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

export const CharactersList = () => {

    const [search, setSearch] = useState('');
    const {
        characters,
        planet,
        handdlerCharacters,
        handleScrollTop,
        page,
        isFavorite,
        handleFavoriteClick,
    } = useContext(DataContext);


    return (
        <>
            <input
                type="text"
                placeholder="Buscar personaje..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <section>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Fav</th>
                                <th>Nombre</th>
                                <th>Planeta</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            characters.filter((character) =>
                                character.name.toLowerCase().includes(search.toLowerCase())
                            )
                                .map(character => (
                                    <tbody key={character.url}>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" checked={isFavorite(character)} onChange={() => handleFavoriteClick(character)} className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12 hover:scale-150 transition-all duration-500">
                                                            <img className="hover:scale-125 transition-all duration-500 cursor-pointer" src={`https://starwars-visualguide.com/assets/img/characters/${character.url.split('/')[5]}.jpg`} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{character.name}</div>
                                                        <div className="text-sm opacity-50">Nacimiento: {character.birth_year}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {
                                                    planet[character.homeworld] ? (
                                                        <span className="badge badge-ghost badge-sm">{planet[character.homeworld]}</span>
                                                    ) : (
                                                        <span className="badge badge-ghost badge-sm">cargando..</span>
                                                    )
                                                }
                                            </td>
                                            <th>
                                                <Link to={`/character/${character.url.split('/')[5]}/`}>
                                                    ver más
                                                </Link>
                                            </th>
                                        </tr>
                                    </tbody>

                                ))}
                    </table>
                </div>

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
