const  mongoose  = require("mongoose")

let toDoSchema = mongoose.Schema({
    toDo:String,
    done:Boolean
});

const toDo = mongoose.model('toDo', toDoSchema);
module.exports = toDo;