import mongoose from 'mongoose';
 
const planetSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    overview: {
        content: String,
        source: String, 
    },
    structure: {
        content: String,
        source: String, 
    },
    geology: {
        content: String,
        source: String, 
    },
    rotation: Number,
    revolution: Number,
    radius: Number,
    temperature: Number,
    images: {
        planet: String,
        internal: String,
        geology: String
    },
    color: String
})

const Planet = mongoose.model('Planet', planetSchema);

export default Planet;