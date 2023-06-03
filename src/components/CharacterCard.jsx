import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

export const CharacterCard = ({ character }) => {

    const { isFavorite, handleFavoriteClick } = useContext(DataContext);

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-200">
            <Link to={`/character/${character.url.split('/')[5]}/`}>

                <img
                    className="w-full h-48 object-cover"
                    src={`https://starwars-visualguide.com/assets/img/characters/${character.url.split('/')[5]}.jpg`}
                    alt={character.name}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{character.name}</div>
                </div>
            </Link>
            <div className="px-6 py-4 flex justify-end">


                <button onClick={() => handleFavoriteClick(character)}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={`${isFavorite(character) ? 'text-red-500' : 'fill-none'}`}
                    />
                </button>
            </div>
        </div>
    );
};