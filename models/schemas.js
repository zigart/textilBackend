const mongoose = require('mongoose');

let attandant = mongoose.Schema({
    name: String,
    password: String
})


let worker = mongoose.Schema({
    name: String,
    activeDivider: Boolean,
    activeReviewer: Boolean,
    lastDivition: Date,
    lastReview: Date
});

let divide = mongoose.Schema({
    worker:String,
    date: Date
});

let review = mongoose.Schema({
    worker: String,
    date: Date,
    colth: Number,
    failed: Number
});

module.exports = mongoose.model('worker', workerSchema);
module.exports = mongoose.model('divide', divideSchema);
module.exports = mongoose.model('review', reviewSchema);