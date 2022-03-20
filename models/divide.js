const mongoose = require('mongoose');

let divideSchema = mongoose.Schema({
    worker: Object,
    machine:Object,
    date: String,
    colth: Number,
    failed: Number
});

const divide = mongoose.model('divide', divideSchema);
module.exports =  divide;