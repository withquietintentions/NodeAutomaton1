//Automaton
// Persistent datastore with manual loading
// $eq =   Matches values that are equal to a specified value.
// $gt >   Matches values that are greater than a specified value.
// $gte    >=  Matches values that are greater than or equal to a specified value.
// $lt <   Matches values that are less than a specified value.
// $lte    <=  Matches values that are less than or equal to a specified value.
// $ne !=  Matches all values that are not equal to a specified value.
// $in in(x,y..)   Matches any of the values specified in an array.
// $nin    not in(x,y,…)   Matches none of the values specified in an array.

// console.log ("wtf");
// // Writing...
// var fs = require("fs");
// var myJson = {
//     key: "myvalue"
// };

// fs.writeFile( "filename.json", JSON.stringify( myJson ), "utf8", yourCallback );

// // And then, to read it...
// //myJson = require("./filename.json");

// //testing read file
// var topten = fs.readFileSync("../data/guesses.js", "UTF-8")
// ///starts jquey listening
// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// //what happens on click of submit button
// //submit on button
// $("#submission"). submit(function( event ) {
//     alert ("Handler for .submit() called.");
//     event.preventDefault();

// });



// to check against another thing...
// $( "form" ).submit(function( event ) {
//   if ( $( "input:first" ).val() === "correct" ) {
//     $( "span" ).text( "Validated..." ).show();
//     return;
//   }

//get input and save as a variable

//append this variable to a list

//count the items in a list to see the frequency of a word and make a topten list

//check the saved varaible against the top ten list

//if equal 
    //return a yes in the responseMessage
    //send message to photon to move motor

//if not 
    //retun a try again in the responseMessage




    // $("#submit").click(function(){

    //     $("#responseMessage").prepend("Good Try!");

    // });
  


//     $.getJSON('/guesses-api', printTerms);
//     $('form').submit(function (e) {
//         e.preventDefault();
//         $.post('/guesses-api', {word: $('#word').val()}, printTerms);
//         this.reset();
//     });

// });

// function printTerms(words) {
//     $('body>dl').empty();
//     $.each(words, function () {
//         $('<dl>').text(this.word).appendTo('body>dl');
//     });
//     $('dl').off('dblclick').dblclick(function() {
//         $.ajax({
//             url: '/guesses-api/' + $(this).text(),
//             type: 'DELETE',
//             success: printTerms
//         });
//     });
// }