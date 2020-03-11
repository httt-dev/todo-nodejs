var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose  = require("mongoose");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");
var app = express();

var port = process.env.PORT || 3002;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

//db info log
console.log(config.getDnConnectionString());
mongoose.connect(config.getDnConnectionString(),{useNewUrlParser:true , useUnifiedTopology:true});

setupController(app);

todoController(app);

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("index");
});

app.listen(port, function () {
    console.log("App listening on port " + port);
});