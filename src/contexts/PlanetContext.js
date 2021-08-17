import { createContext, useState } from "react";
import { fetchSinglePlanet } from '../api';

export const PlanetContext = createContext();

function PlanetProvider({ children }) {
    const [planet, setPlanet] = useState([]);

    const handleClick = async(planet) => {
        const fetchPlanetInfo = await fetchSinglePlanet(planet);
        setPlanet(fetchPlanetInfo);
    }

    return (
        <PlanetContext.Provider
            value={{ planet, setPlanet, handleClick }}
        >
            { children }
        </PlanetContext.Provider>
    )
}

export default PlanetProvider
