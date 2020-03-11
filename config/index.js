var config = require("./config.json");
module.exports= {
    getDnConnectionString : function(){
        return `mongodb+srv://${config.username}:${config.password}@cluster0-shdul.azure.mongodb.net/test?retryWrites=true&w=majority`;
    }
}