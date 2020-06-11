const express = require("express");
const https = require("https");


const app = express();



app.get("/", function(req, res) {
    const url = "https://api.thecatapi.com/v1/images/search"

    https.get(url, function(response) {
        //console.log(response);

        response.on("data", function(data) {
            var catJSON = JSON.parse(data);
            console.log(catJSON);
            console.log(catJSON[0].url);

        })

    })
    res.send("Server is up and running.");


})

//ds




app.listen(3000, function() {
    console.log("Server is runing on port 3000.");

})