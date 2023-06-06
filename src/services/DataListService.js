import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';
const charactersEndpoint = 'people';
const planetsEndpoint = 'planets';

const DataListService = {

    getCharacters: () => (
        axios.get(`${baseUrl}/${charactersEndpoint}`)
    ),

    getCharacter: (id) => (
        axios.get(`${baseUrl}/${charactersEndpoint}/${id}/`)
    ),

    getPlanet: (planetUrl) => (
        axios.get(planetUrl)
    ),

    getPage: (page) => (
        axios.get(page)
    ),

}

export default DataListService;