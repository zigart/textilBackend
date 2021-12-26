const mongoose = require('mongoose');

let reviewSchema = mongoose.Schema({
    worker: String,
    date: String,
    colth: Number,
    failed: Number
});

const review = mongoose.model('review', reviewSchema);
module.exports = review;