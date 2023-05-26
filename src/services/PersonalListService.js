import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';
const personalEndpoint = 'people';

const PersonalListService = {

    getPersonal: () => (
        axios.get(`${baseUrl}/${personalEndpoint}`)
    ),

}

export default PersonalListService;