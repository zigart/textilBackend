const mongoose = require('mongoose');

let workerSchema = mongoose.Schema({
    name: String,
    activeDivider: String,
    activeReviewer: String,
    lastDivition: String,
    lastReview: String
});

const worker = mongoose.model('worker', workerSchema);
module.exports =  worker;