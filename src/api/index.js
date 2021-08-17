import axios from "axios";

const urlAllPlanets = 'http://localhost:8080/planets';
const singlePlanetURL = 'http://localhost:8080/planets/?name=';

export const fetchData = async() => {
    try {
        const { data } = await axios.get(urlAllPlanets);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export const fetchSinglePlanet = async(planet) => {
    const url = `${singlePlanetURL}${planet}`;
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}
