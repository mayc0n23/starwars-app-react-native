import axios from 'axios';

export default {

    async peoples() {
        return (await axios.get('http://swapi.dev/api/people/')).data;
    },

    async planets() {
        return (await axios.get('http://swapi.dev/api/planets/')).data;
    },

    async starships() {
        return (await axios.get('http://swapi.dev/api/starships/')).data;
    }

};