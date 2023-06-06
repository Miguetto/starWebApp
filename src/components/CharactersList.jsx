import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { CharacterCard } from "./CharacterCard";
import { SearchList } from "./SearchList";

export const CharactersList = () => {

    const [search, setSearch] = useState('');
    const {
        characters,
        handdlerCharacters,
        handleScrollTop,
        page,
    } = useContext(DataContext);

    return (
        <>
            <form className="mb-3">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                <div className="relative">
                    <SearchList search={search} setSearch={setSearch} />
                </div>
            </form>
            <section className="sm:mr-1 md:mr-2 lg:mr-3 sm:ml-1 md:ml-2 lg:ml-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
                    {
                        characters.filter((character) =>
                            character.name.toLowerCase().includes(search.toLowerCase())
                        ).map(character => (
                            <CharacterCard key={character.url} character={character} />
                        ))
                    }
                </div>

            </section>
            <div className="flex justify-center">
                <button
                    className="mt-4 mb-4 ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    style={{ display: page === null ? 'none' : '' }}
                    onClick={() => handdlerCharacters()}
                >
                    Mostrar más
                </button>
                <button
                    className="mt-4 mb-4 ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    style={{ display: page !== null ? 'none' : '' }}
                    onClick={handleScrollTop}
                >
                    Subir
                </button>
            </div>
        </>
    )
}
