import axios from "axios";

export const activebite = axios.create({
    baseURL: 'https://activebitetipask.pagekite.me',
    timeout: 5000,
    withCredentials: true
});
