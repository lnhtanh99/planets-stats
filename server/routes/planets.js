import express from 'express';
import { getPlanet, getSinglePlanet } from '../controllers/planets.js';
const router = express.Router();

router.get('/', getPlanet);
router.get('/:id', getSinglePlanet);

export default router;