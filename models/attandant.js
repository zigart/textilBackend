const mongoose = require('mongoose');

let attandantSchema = mongoose.Schema({
    name: String,
    password: String
});


const attandant = mongoose.model('attandant', attandantSchema);
module.exports = attandant;