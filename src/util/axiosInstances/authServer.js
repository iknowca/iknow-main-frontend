import axios from 'axios';

const authServerAxios = axios.create({
    baseURL: process.env.VUE_APP_AUTH_SERVER_BASE_URL,
});

export default authServerAxios;