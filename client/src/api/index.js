import axios from "axios";

const url = 'http://localhost:5000/planets';

export const fetchData = async() => {
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export const fetchSinglePlanet = async(id) => {
    const singleUrl = `${url}/${id}`;
    try {
        const { data } = await axios.get(singleUrl);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}
