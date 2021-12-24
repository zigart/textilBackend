const mongoose = require('mongoose');

let attandantSchema = mongoose.Schema({
    name: String,
    password: String
})


let workerSchema = mongoose.Schema({
    name: String,
    activeDivider: Boolean,
    activeReviewer: Boolean,
    lastDivition: Date,
    lastReview: Date
});

let divideSchema = mongoose.Schema({
    worker:String,
    date: Date
});

let reviewSchema = mongoose.Schema({
    worker: String,
    date: Date,
    colth: Number,
    failed: Number
});

module.exports = mongoose.model('attandant', attandantSchema);
module.exports = mongoose.model('worker', workerSchema);
module.exports = mongoose.model('divide', divideSchema);
module.exports = mongoose.model('review', reviewSchema);