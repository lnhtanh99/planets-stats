import axios from "axios";

const urlAllPlanets = 'https://planet-json.herokuapp.com/planets';
const singlePlanetURL = 'https://planet-json.herokuapp.com/planets/?name=';

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
