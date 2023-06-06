import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import DataListService from '../services/DataListService';

export const DataProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState();
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    const getCharactersAll = async () => {
        try {
            const res = await DataListService.getCharacters();
            setCharacters([...characters, ...res.data.results]);
            setPage(res.data.next);
        } catch (error) {
            console.error('Error en la petición:', error);
            return 'Desconocido';
        }
    };

    const handdlerCharacters = async () => {
        if (page) {
            const res = await DataListService.getPage(page);
            setCharacters([...characters, ...res.data.results]);
            page != null ? setPage(res.data.next) : setPage(page);
        }
    };

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

    const handleGoBack = () => {
        window.history.back();
    };

    useEffect(() => {
        getCharactersAll();
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
            handleGoBack,
        }}>
            {children}
        </DataContext.Provider>
    )
}
