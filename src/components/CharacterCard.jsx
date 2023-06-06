import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

export const CharacterCard = ({ character }) => {

    const { isFavorite, handleFavoriteClick } = useContext(DataContext);

    return (
        <div className="max-w-xs hover:bg-gray-100 rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-all duration-200">
            <Link to={`/character/${character.url.split('/')[5]}/`}>

                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-l-lg"
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
                        icon={isFavorite(character) ? faHeart : faHeartCrack}
                        className={`${isFavorite(character) ? 'text-red-500' : 'fill-none'}`}
                    />
                </button>
            </div>
        </div>
    );
}