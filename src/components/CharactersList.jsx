import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { CharacterCard } from "./CharacterCard";

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
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                    type="search" 
                    id="default-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Buscar personaje..." 
                    required />
                </div>
            </form>
            <section className="sm:mr-1 md:mr-2 lg:mr-3 sm:ml-1 md:ml-2 lg:ml-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        characters.filter((character) =>
                            character.name.toLowerCase().includes(search.toLowerCase())
                        )
                            .map(character => (
                                <CharacterCard key={character.url} character={character} />
                            ))
                    }
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
