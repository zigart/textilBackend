const mongoose = require('mongoose');

let divideSchema = mongoose.Schema({
    worker:String,
    date: Date
});

const divide = mongoose.model('divide', divideSchema);
module.exports =  divide;