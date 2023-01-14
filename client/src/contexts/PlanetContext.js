import { createContext, useState } from "react";
import { fetchSinglePlanet } from '../api';

export const PlanetContext = createContext();

function PlanetProvider({ children }) {
    const [planet, setPlanet] = useState(null);

    return (
        <PlanetContext.Provider
            value={{ planet, setPlanet }}
        >
            { children }
        </PlanetContext.Provider>
    )
}

export default PlanetProvider
