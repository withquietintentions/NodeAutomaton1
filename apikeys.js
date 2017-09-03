//API Keys

var Particle = require('particle-api-js');
var particle = new Particle();
var token;

particle.login({username: 'zmccloskey@gmail.com', password: 'Charming123'}).then(
  function(data) {
    token = data.body.access_token;
    test = "test"
    console.log("the token from apikeys: " + token)
    return token;
    exports.token;
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);
// var devicesPr = particle.listDevices({ auth: token });
// devicesPr.then(
//   function(devices){
//     console.log('Devices: ', devices);
//   },
//   function(err) {
//     console.log('List devices call failed: ', err);
//   }
// );