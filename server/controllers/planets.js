import Planet from "../models/Planet.js";

export const getPlanet = async(req, res) => {
    try {
        const planets = await Planet.find();
        res.status(200).json(planets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const getSinglePlanet = async(req, res) => {
    const { id } = req.params;
    try {
        const planet = await Planet.findById(id);
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};
