//Automaton

///starts jquey listening
$( document ).ready(function() {
    console.log( "ready!" );
});

//what happens on click of submit button
//submit on button
$("#submission"). submit(function( event ) {
    alert ("Handler for .submit() called.");
    event.preventDefault();

});

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