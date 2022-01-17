const mongoose = require('mongoose');

let reviewSchema = mongoose.Schema({
    worker: Object,
    machine:Object,
    date: String,
    colth: Number,
    failed: Number
});

const review = mongoose.model('review', reviewSchema);
module.exports = review;