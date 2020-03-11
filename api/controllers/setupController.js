var Todos = require("../models/todoModels");
module.exports = function (app){
    //init data
    app.get("/api/setupTodos",function(req, res){
        //init data
        var seedTodos = [
            {
                text:"Hoc nodejs",
                isDone : false
            },
            {
                text:"Hoc nodejs 2",
                isDone : true
            },
            {
                text:"Hoc nodejs 3",
                isDone : false
            }
        ];
        Todos.create(seedTodos, function(err, results){
            if (err) res.send(err);
            res.send(results);
        });
    });
    

}