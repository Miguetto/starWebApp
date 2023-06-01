import { useContext, useState } from "react";
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
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
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
                                                    <input type="checkbox" checked={isFavorite(character)}  onChange={() => handleFavoriteClick(character)} className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.url.split('/')[5]}.jpg`} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{character.name}</div>
                                                        <div className="text-sm opacity-50">Nacimiento: {character.birth_year}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>Purple</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
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
