//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World</h1>")
})

app.get("/contact", function(req, res) {
    res.send("Contact me at: tonytranme0@hotmail.com")
})

app.get("/about", function(req, res) {
    res.send("My name is Tony Tran and I love to code.")
})
app.get("/yeet", function(req, res) {
    res.send("My nfdsfsame is Tony Tran and I love to code.")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");

});