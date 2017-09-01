// Automaton
// new code
var http = require('http');
var fs = require('fs');

var express = require ("express");//module that allows this to work as a server that finds all dependent files
var json = require('express-json');
var cors  = require("cors"); var app = express();


var Datastore = require('nedb');

app.use(express.static("./public"));
app.use(cors());


var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var dbGuesses = new Datastore({ filename: './db/guesses.db', autoload: true });
app.post("/guess", function(req, res) {
    var guess = req.body.guess;

    var doc = {};
    var guessCleanedUp = guess.trim().toLowerCase();


    doc["guess"] = guessCleanedUp;
    doc["time"] = new Date();

    counter = {};
    
    dbGuesses.insert(doc, function(err, updatedDoc) {
      if (err) {
        console.log(err);
        return;
      }
      dbGuesses.find({}, function(err, docs) {
        if (err) {
          console.log(err);
          return;
        } 
        var counter = getCounterDictionary(docs);
        console.log(counter);
        var freqs = getTopTenFromCounter(counter);
        console.log(freqs);
      })
    });
  }
);

function getCounterDictionary(docs) {
  for (var i = 0; i < docs.length; i++) {
    var val = docs[i].guess;
    if (counter[val] == null) {
      counter[val] = 1;
    } else {
      counter[val] +=1;
    }
  }
  return counter;
}

function getTopTenFromCounter(counter) {
  var freqs = {};
  var counters = Object.keys(counter);
  for (var i = 0; i < counters.length; i++) {
    var occurances = counter[counters[i]];
    if (freqs[occurances] == null) {
      freqs[occurances] = [counters[i]];
    } else {
      freqs[occurances].push(counters[i]);
    }
  }
  return freqs;
}

app.listen(3000);//tells me I can go to localhost 3000 to find my page in the browser

console.log("Express app running on port 3000");//terminal log 
console.log("this");

module.exports = app;


