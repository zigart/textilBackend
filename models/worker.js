const mongoose = require('mongoose');

let workerSchema = mongoose.Schema({
    name: String,
    activeDivider: Boolean,
    activeReviewer: Boolean,
    lastDivition: Date,
    lastReview: Date
});

const worker = mongoose.model('worker', workerSchema);
module.exports =  worker;