import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';
const charactersEndpoint = 'people';

const CharactersListService = {

    getCharacters: () => (
        axios.get(`${baseUrl}/${charactersEndpoint}`)
    ),

    getPage: ( page ) => (
        axios.get(page)
    ),

}

export default CharactersListService;