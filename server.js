const express = require ("express");
const path = require ("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api/articleRoutes");
const PORT = process.env.PORT || 8080;
const app = express();






app.use(express.static("./client/build"));

 app.get("*", function(req, res){
     res.sendFile(path.join(_dirname, "./client/build/index.html"));

 });

app.listen(PORT, function(){
    console.log(`Server now on port ${PORT}`)
})




// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets

// Add routes, both API and view

 app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",

);


