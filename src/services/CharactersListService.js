import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';
const charactersEndpoint = 'people';

const CharactersListService = {

    getCharacters: () => (
        axios.get(`${baseUrl}/${charactersEndpoint}`)
    ),

    getCharacter: ( id ) => (
        axios.get(`${baseUrl}/${charactersEndpoint}/${id}/`)
    ),

    getPage: ( page ) => (
        axios.get(page)
    ),

}

export default CharactersListService;