import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import CharactersListService from '../services/CharactersListService';

export const DataProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState();
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

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

    const addToFavorites = (character) => {
        setFavorites([...favorites, character]);
    };

    const removeFromFavorites = (character) => {
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.url !== character.url
        );
        setFavorites(updatedFavorites);
    };

    const isFavorite = (character) => {
        return favorites.some((favCharacter) => favCharacter.url === character.url);
    };

    const handleFavoriteClick = (character) => {
        if (isFavorite(character)) {
            removeFromFavorites(character);
        } else {
            addToFavorites(character);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <DataContext.Provider value={{
            characters,
            handdlerCharacters,
            handleScrollTop,
            page,
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite,
            handleFavoriteClick,
        }}>
            {children}
        </DataContext.Provider>
    )
}
