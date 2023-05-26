import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import CharactersListService from '../services/CharactersListService';

export const DataProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        try {
            const res = await CharactersListService.getCharacters();
            setCharacters([...characters, ...res.data.results]);
            setPage(res.data.next);
        } catch {

        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <DataContext.Provider value={{ characters }}>
            {children}
        </DataContext.Provider>
    )
}
