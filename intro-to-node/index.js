const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");

var supervillains = require("supervillains");

var mySuperVillainName = supervillains.random();

console.log(mySuperVillainName);