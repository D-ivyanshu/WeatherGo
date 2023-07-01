import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: apiKey 
    }
})
 
