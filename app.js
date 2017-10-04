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
// var text = require("./public/js/text.js");
var Datastore = require('nedb');
app.set('port', (process.env.PORT || 3000));//sets it for local or Heroku
app.use(express.static("./public"));//where my puvlic files can be found for web
app.use(cors());


var trackButtons = {
  hit: null,
  status: null
};


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

function particle_open() {
    particle.callFunction({ deviceId: D_UID, name: 'open', auth: TOKEN }).then(
      function (data) {
          console.log('Open called succesfully : ', data.body.return_value);
      }, function (err) {
          console.log('An error occurred:', err);
      }); 
}

// HELP!!!
///if button input from Particle 
function buttonRedirect(){
   
  res.redirect('/opening.html')
}


var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// HELP!!
//trying to import an openstate to send to Particle to move the motor open

app.get('./public/js/text.js', function(req, res) {
    console.log(req.body);
});

//end of trying to import an open state

app.post("/open_urn", function(req, res) {
  console.log("opening urn!!!");
  if (trackButtons.hit) {
    // track button has been hit so need to go in opposite direction
    trackButtons.hit = false;
    console.log(trackButtons);
    res.send({atMaximum: true});
  } else {
    particle_open();
    console.log(trackButtons);
    res.send({atMaximum: false});
  }
});

app.post("/closedMax", function(req, res) {
  console.log("Closed max Button HIT!!!!");
  trackButtons.hit = true;
  trackButtons.status = 'opening';
  console.log(trackButtons);
  res.send("done");
});

app.post("/openMax", function(req, res) {
  console.log("OPen max Button HIT!!!!");
  trackButtons.hit = true;
  trackButtons.status = 'closing';
  console.log(trackButtons);
  res.send("done");
});


var dbGuesses = new Datastore({ filename: './db/guesses.json', autoload: true });
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
          var atMaximum = false;
          if (trackButtons.hit) {
            trackButtons.hit = false;
            atMaximum = true; 
          } else {
            particle_blink();
          }
          console.log(trackButtons);
          res.send({guess: guess, atMaximum:atMaximum});
        } else {
          var atMaximum = false;
          if (trackButtons.hit) {
            trackButtons.hit = false;
            atMaximum = true; 
          }
          // if no match
          console.log(trackButtons);
          res.send({atMaximum: atMaximum});
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


const server = http.createServer(app);

server.listen(app.get('port'), function listening() {
  console.log('Listening on %d', app.get('port'));
});


module.exports = app;
