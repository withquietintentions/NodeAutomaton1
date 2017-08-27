//Automaton
$(document).ready(function () {
    
    $('form').submit(function(e)){
            e.preventDefault();
            $.post()
    }


    var newGuess = $("<p>");//makes paragraph
    newGuess.append("<em>TRY AGAIN</em>");
    $("#tryAgain").html(newGuess);//puts paragraph in a div with the id guess

    //make an on click for my button to append to a list 
    $("#submit").click( function(){
        $("#hit_button").prepend("Good Try!");

    });

});

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