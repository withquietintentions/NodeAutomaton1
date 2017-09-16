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
var token = process.env.TOKEN;
var d_uid = process.env.D_UID;


//var timer1;

//timer1 = setInterval(talk_with_photon,10000);//might want the convo only happen on an event? 

function talk_with_photon() {
    g_var(d_uid, token);
    c_func(d_uid, token);          
}

function g_var(d_id,l_token){
    particle.getVariable({ deviceId: d_id, name: 'int_val', auth: l_token }).then(
        function (data) {
            console.log('Device variable retrieved successfully:', data.body.result);
        }, function (err) {
            console.log('An error occurred while getting attrs:', err);
        });
}

function c_func(d_id, l_token) {

    var fnPr = particle.callFunction({ deviceId: d_id, name: 'int_fun', argument: 'wifi_rssi', auth: l_token });

    fnPr.then(
        function (data) {
            console.log('Function called succesfully WiFi_RSSI: ', data.body.return_value);
        }, function (err) {
            console.log('An error occurred:', err);
        });
        
    var fnPr2 = particle.callFunction({ deviceId: d_id, name: 'int_fun', argument: 'blink', auth: l_token });

    fnPr2.then(
        function (data) {
            console.log('Function called succesfully LED: ', data.body.return_value);
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


