import { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import DataListService from '../services/DataListService';

export const DataProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [page, setPage] = useState();
    const [planet, setPlanet] = useState({});
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [search, setSearch] = useState('');


    const fetchCharacters = async () => {
        try {
            const res = await DataListService.getCharacters();
            setCharacters([...characters, ...res.data.results]);
            setPage(res.data.next);
        } catch (error) {
            console.error('Error en la petición:', error);
            return 'Desconocido';
        }
    };

    const fetchPlanets = async () => {
        try {
            const res = await DataListService.getPlanets();
            setPlanets([...planets, ...res.data.results]);
            setPage(res.data.next);
        } catch (error) {
            console.error('Error en la petición:', error);
            return 'Desconocido';
        }
    };

    const fetchPlanet = async (url) => {
        try {
            const res = await DataListService.getPlanet(url);
            setPlanet((prevPlanet) => ({
                ...prevPlanet,
                [url]: res.data.name
            }));
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
    }

    const handdlerPlanets = async () => {
        if (page) {
            const res = await DataListService.getPage(page);
            setPlanets([...planets, ...res.data.results]);
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
        fetchPlanets();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        characters.forEach(character => {
            fetchPlanet(character.homeworld);
        });
    }, [characters]);

    return (
        <DataContext.Provider value={{
            characters,
            planets,
            planet,
            handdlerCharacters,
            handdlerPlanets,
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
