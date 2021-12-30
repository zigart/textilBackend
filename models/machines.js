const  mongoose  = require("mongoose")

let machineSchema = mongoose.Schema({
    machineNumber: Number,
    avtiveMachine: Boolean
});

const machine = mongoose.model('machine', machineSchema);
module.exports = machine;