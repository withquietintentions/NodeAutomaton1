// Automaton
// new code
var http = require('http');
var fs = require('fs');
var express = require ("express");//module that allows this to work as a server that finds all dependent files
var cors = require("cors");
var app = express();

app.use(express.static("./public"));

app.use(cors());

app.listen(3000);//tells me I can go to localhost 3000 to find my page in the browser

console.log("Express app running on port 3000");//terminal log 

module.exports = app;

// var timeStamp = Math.floor(Date.now());

// function(guess, timeStamp){


