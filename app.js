// Automaton
// Node
require('dotenv').config();//getting token and id for api
var http = require('http');
var fs = require('fs');
var express = require ("express");//module that allows this to work as a server that finds all dependent files
var json = require('express-json');
var cors  = require("cors"); var app = express();
var Particle = require('particle-api-js');
var particle = new Particle();
var token

var Datastore = require('nedb');
app.set('port', (process.env.PORT || 3000));//sets it for local or Heroku
app.use(express.static("./public"));//where my puvlic files can be found for web
app.use(cors());

//TESTING PARTICLE IN HERE
//NodeJS code for using Photon variable
var Particle = require('particle-api-js');
var particle = new Particle();
const TOKEN = process.env.TOKEN;
const D_UID = process.env.D_UID;


function particle_blink() {
    particle.callFunction({ deviceId: D_UID, name: 'blink', auth: TOKEN }).then(
	    function (data) {
	        console.log('Blink called succesfully : ', data.body.return_value);
	    }, function (err) {
	        console.log('An error occurred:', err);
	    });	
}
///END OF PARICLE TEST


var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var dbGuesses = new Datastore({ filename: './db/guesses.db', autoload: true });
app.post("/guess", function(req, res) {
    var guess = req.body.guess;
    var guessCleanedUp = guess.trim().toLowerCase();

    insertGuessIntoDb(
      guessCleanedUp, 
      function(docs) {
        var counter = getCounterDictionary(docs);
        var freqs = getTopTenFromCounter(counter);
        var numbers = Object.keys(freqs).map(Number).sort().reverse();
        var result = checkTopWords(numbers, freqs, guessCleanedUp);
        console.log(freqs);
        if (result != null) {
          console.log("removed!: ", result);
          // if result is non null then there is a match
          // MATCH WAS FOUND!!!!!!!!!!!!
         particle_blink();

          res.send(guess);
        } else {
          // if no match
          res.send(null);
        }
      }, 
      function(err) {
        console.log(err);
        res.send(null);
      }
    );
});

function insertGuessIntoDb(guess, success, failure) {
  var doc = {};
  doc["guess"] = guess;
  doc["time"] = new Date();
  dbGuesses.insert(doc, function(err, updatedDoc) {
    if (err) {
      failure(err);
      return;
    }
    dbGuesses.find({}, function(err, docs) {
      if (err) {
        failure(err);
        return;
      } 
      success(docs);
    });
  });
}

function checkTopWords(numbers, freqs, guessCleanedUp) {
  var topWords = 5;
  for (var i = 0; i < numbers.length; i++) {
    var list = freqs[numbers[i]];
    for (var j = 0; j < list.length; j++) {
      if (guessCleanedUp == list[j]) {
        return guessCleanedUp;
      }
      if (topWords < 0) {
        return null;
      }
      topWords -= 1;
    }
  }
  return null;
}

function getCounterDictionary(docs) {
  var counter = {};
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});//tells me I can go to localhost 3000 to find my page in the browser



module.exports = app;


