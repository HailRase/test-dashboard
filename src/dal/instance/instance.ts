import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://YURY:2195662Aa@134.17.25.94:55052/',
    withCredentials: true,
});
