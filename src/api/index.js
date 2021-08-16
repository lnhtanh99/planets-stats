import axios from "axios";

const urlAllPlanets = 'http://localhost:8080/planets';

export const fetchData = async() => {
    try {
        const { data } = await axios.get(urlAllPlanets);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}