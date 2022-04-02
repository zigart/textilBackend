const mongoose = require('mongoose');

let attendantSchema = mongoose.Schema({
    name: String,
    password: String
});


const attandant = mongoose.model('attendant', attendantSchema);
module.exports = attandant;