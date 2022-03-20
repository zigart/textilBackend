const mongoose = require('mongoose');

let reviewSchema = mongoose.Schema({
    worker:Object,
    machine:Object,
    status:Boolean,
    date: Date,
    problems:String
});

const review = mongoose.model('review', reviewSchema);
module.exports = review;