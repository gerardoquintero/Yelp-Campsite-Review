const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number
});
// implementation of a mone to many relationship 
module.exports = mongoose.model("Review", reviewSchema);
