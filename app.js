// Automaton
// Node
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
//responses
//var apikeys = require ('./apikeys');

//console.log("token in app: " + apikeys.token);
particle.login({username: 'zmccloskey@gmail.com', password: 'Charming123'}).then(
  function(data) {
    token = data.body.access_token;
    return token;
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);
var fnPr = particle.callFunction({ deviceId: '410032000b47343138333038', name: 'y', argument: 'D0:HIGH', auth: token });

fnPr.then(
  function(data) {
    console.log('Function called succesfully:', data);
  }, function(err) {
    console.log('An error occurred:', err);
  });

///END OF PARICLE TEST


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

        var numbers = Object.keys(freqs).map(Number).sort().reverse();
        console.log(numbers);

        var result = checkTopWords(numbers, freqs, guessCleanedUp);
        if (result != null) {
          console.log("removed!: ", result);
          // if result is non null then there is a match
          res.end(guess);
          return;
        } else {
          // if no match
          res.end(null);
          return;
        }
      })
    });
    res.end(null);
  }
);

function checkTopWords(numbers, freqs, guessCleanedUp) {
  var topWords = 5;
  var tmp = 0;
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


