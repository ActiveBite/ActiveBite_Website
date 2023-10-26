import axios from "axios";

export const activebite = axios.create({
    baseURL: 'https://1bfc-52-236-176-242.ngrok-free.app',
    timeout: 5000,
    headers: {"ngrok-skip-browser-warning": 1}
});
