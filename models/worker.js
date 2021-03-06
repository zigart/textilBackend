const mongoose = require('mongoose');

let workerSchema = mongoose.Schema({
    name: String,
    activeDivider: Boolean,
    activeReviewer: Boolean,
    lastWork:String,
    lastDivition: String,
    lastReview: String,
    password: String
});

const worker = mongoose.model('worker', workerSchema);
module.exports =  worker;