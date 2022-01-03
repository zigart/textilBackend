const  mongoose  = require("mongoose")

let machineSchema = mongoose.Schema({
    machineNumber: Number,
    activeMachine: Boolean,
    lastReview: String,
    lastDivition: String
});

const machine = mongoose.model('machine', machineSchema);
module.exports = machine;