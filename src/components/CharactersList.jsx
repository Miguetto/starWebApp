import { useEffect, useState } from "react";
import CharactersListService from "../services/CharactersListService";

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

            <h1>Personajes Star Wars</h1>
            
            {
                characters.map(person => (
                    <p key={person.url}>{person.name}</p>
                ))
            }
            
            
            <button
                disabled={page === null}
                onClick={() => handdlerCharacters()}
            >
                Mostrar más
            </button>
            <button
                disabled={page !== null}
                onClick={handleScrollTop}
            >
                Subir
            </button>
        </>
    )
}
