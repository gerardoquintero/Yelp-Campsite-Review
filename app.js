const express = require('express'); // Start of express app configuration 
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); //adding options

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
// logic to check if there is a error or opened  and set a reffernece to shorten boiler plate. 
// just so I dont have to mention mongoose.connection.on everytime


const app = express();

app.set('view engine', 'ejs');   //setting view engine and views directory 
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {   //basic route
    res.render('home')
})
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find();
    res.render('campgrounds/index', { campgrounds }); //first part grabs, second part renders
})

// app.get('/makecampground', async (req, res) => {   //hardcoding fake camp ground to test 
//    const camp = new Campground({title: 'My backyard'});
//    await camp.save();
//    res.send(camp)
// })

app.listen(3000, () => {
    console.log('Serving opn port 30000') //basic setup, it works
})