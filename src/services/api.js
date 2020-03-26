import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-be-a-hero.herokuapp.com"
})

export default api;