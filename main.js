console.log("hello world");

//brings in the express module
let express = require("express");

// create the application object
let app = express()

//this is a route
app.get("/", function(request, response) {

        response.send("Hello");

})

app.listen(9001, function(){
    console.log("Application started");
})