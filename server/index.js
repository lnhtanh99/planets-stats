import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import 'dotenv/config'

import planetsRoutes from './routes/planets.js'
const app = express();

app.use(cors());
     
app.get('/', (req, res) => {
    res.send('Hello');
})

app.use('/planets', planetsRoutes);   

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) 
    .catch(err => console.error(err))

