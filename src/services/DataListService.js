import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';
const charactersEndpoint = 'people';
const planetsEndpoint = 'planets';

const DataListService = {

    getCharacters: () => (
        axios.get(`${baseUrl}/${charactersEndpoint}`)
    ),

    getCharacter: ( id ) => (
        axios.get(`${baseUrl}/${charactersEndpoint}/${id}/`)
    ),

    getPlanets: () => (
        axios.get(`${baseUrl}/${planetsEndpoint}`)
    ),

    getPage: ( page ) => (
        axios.get(page)
    ),

    getPlanet: (url) => (
       axios.get(`${url}`)
    ),

    getHomeWorld: ( id ) => (
      axios.get(`${baseUrl}/${planetsEndpoint}/${id}/`)
    ),

}

export default DataListService;