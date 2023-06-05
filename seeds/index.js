const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers'); // destructure
const Campground = require('../models/campground');
//these above are imports

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); //adding options

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];


const seedDB = async() => {
    await Campground.deleteMany({});
   for(let i = 0; i < 50; i++) { // looping
    const random1000 =  Math.floor(Math.random() * 1000);
    const camp = new Campground({ // make my new campground
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample.places}`

    })
    await camp.save(); // awaiting to save 
   }
}

seedDB().then(() => {    //seedDB return a promise because its a async function so we can call .then and close it 
    mongoose.connection.close();
});