const mongoose = require('mongoose');

let divideSchema = mongoose.Schema({
    work:String,
    worker: Object,
    machine:Object,
    date: String,
    colth: Number,
    failed: Number
});

const divide = mongoose.model('divide', divideSchema);
module.exports =  divide;