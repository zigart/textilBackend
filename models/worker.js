const mongoose = require('mongoose');

let workerSchema = mongoose.Schema({
    name: String,
    activeDivider: Boolean,
    activeReviewer: Boolean,
    lastDivition: String,
    lastReview: String
});

const worker = mongoose.model('worker', workerSchema);
module.exports =  worker;