var mogoose = require("mongoose");
var Schema = mogoose.Schema;

var todoSchema = new Schema({
    text: String,
    isDone : Boolean
});

var Todos = mogoose.model("Todos",todoSchema);

module.exports = Todos;