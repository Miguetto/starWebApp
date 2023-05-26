import { useEffect, useState } from "react";
import CharactersListService from "../services/CharactersListService";
import { Link } from "react-router-dom";

export const CharactersList = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState();

    const fetchCharacters = async () => {
        try {
            const res = await CharactersListService.getCharacters();
            setCharacters([...characters, ...res.data.results]);
            setPage(res.data.next);
        } catch {

        }
    };

    const handdlerCharacters = async () => {
        if (page) {
            const res = await CharactersListService.getPage(page);
            setCharacters([...characters, ...res.data.results]);
            page != null ? setPage(res.data.next) : setPage(page);
        }
    }

    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

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
                    </li>
                ))
            }
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
