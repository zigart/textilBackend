const mongoose = require('mongoose');

let reviewSchema = mongoose.Schema({
    work:String,
    worker:Object,
    machine:Object,
    status:Boolean,
    date: String,
    problems:String
});

const review = mongoose.model('review', reviewSchema);
module.exports = review;