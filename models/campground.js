const mongoose = require('mongoose');
const Schema = mongoose.Schema; // creating variable for schema 

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Campfround', CampgroundSchema);// creating model and exports module