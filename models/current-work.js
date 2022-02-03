const mongoose = require('mongoose');

let currentWorkSchema = mongoose.Schema({
    _id: String,
    work: String,
    machine: Object
});


const currentWork = mongoose.model('currentWork', currentWorkSchema);
module.exports = currentWork;