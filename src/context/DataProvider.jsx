import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import CharactersListService from '../services/CharactersListService';

export const DataProvider = ({ children }) => {

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
        <DataContext.Provider value={{ characters, handdlerCharacters, handleScrollTop, page }}>
            {children}
        </DataContext.Provider>
    )
}
