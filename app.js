const express = require('express'); // Start of express app configuration 
const app = express();
const path = require('path');

app.set('view engine', 'ejs');   //setting view engine and views directory 
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {   //basic route
    res.render('home')
})

app.listen(3000, () => {
    console.log('Serving opn port 30000') //basic setup, it works
})