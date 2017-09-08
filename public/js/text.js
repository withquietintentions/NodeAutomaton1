
var statements_lose_version = [  
	{"question" : { 
		"synopsis": "Do you want to know what automatons are?",
		"optionsA" : [ "yes","maybe"],
		"optionsN" : [ "no", "nah"],
		"lose_message": "Atomatons are metal statues of animal, men and monsters, from ancient Greek Myths. The best crafted ones can think and feel like humans. You lose and so does all humanity"
	}}, 
	{"question" : {
		"synopsis": "Originally pandoras box was not a box. Was it a vase, a jar, or a basket?",
		"options": [ "vase", "jar", "basket"],
		"lose_message": "It was a JAR! You lose and so does humanity"
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs, of course , is that they are the illegitimate offspring of militarism and patriarchal capitalism...But illegitimate offspring are... Open Pandoras box to read the rest (open/No)",
		"options": ["open"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto. All of humanity is doomed and you lose."
	}} 
];


var statements = statements_lose_version;
var question_num = 0;
var answer = (statements[question_num]["question"]["synopsis"]); //is a string
var optionsA = statements[question_num]["question"]["optionsA"];// options is a list 
var optionsN = statements[question_num]["question"]["optionsN"];// options is a list 
var lose_message = statements[question_num]["question"]["lose_message"];// is a string
var total_questions = statements_lose_version.length;
var score= 0;
var lets_play = null;
var play = true ;
//var num = 0;


   
        $( document ).ready(function OpeningPage() {
        	"use srict";
        	var $question = $('#question_synopsis');
        	var $optionsA = $('#optionsA');
        	var $optionsN = $('#optionsN');
        	var $playAgain = $("#play_again");
        	var $loseMessage = $("#lose_message");
        	var $urnOpening = $("#urn_opening")
        	var $optionsli = $('#options');

var num = 0

while (num<optionsA.length){
$("li[id^='node']:last").append(optionsA[num]);
num++
}

var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var cList = $('ul.mylist')
$.each(countries, function(i)
{
    var li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(cList);
    var aaa = $('<a/>')
        .addClass('ui-all')
        .text(countries[i])
        .appendTo(li);
});

          	
            $question.text(answer);
           
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
       $('#options').append($("<li>").text(optionsA[1]));
            $optionsA.click(function(){//clicking to know more
             	$question.hide();
             	$optionsA.hide();
             	$optionsN.hide();
        		$loseMessage.text(lose_message).show();
        		$urnOpening.text("Urn will open...").show();
        		//send event here for motor to open by 1
        		//tigger breaking sound here
        		$playAgain.text("Play Again?").show();
        		$playAgain.click(function(){
        			$loseMessage.hide();
        			$urnOpening.text("Urn will open...").hide();
        			$playAgain.text("Play Again?").hide();
        			//move foward one question
        			});
        		
       	
    		});
    });
//}
   
// $.each(array, function(index, value){
//     $('.element').html( $('.element').html() + '<span>' + value +'</span>')
// });
    //hover for links in options
// $(".hover").mouseover(function() {
//     $(this).find(" > div").css("color", "cyan");
// }).mouseout(function() {
//     $(this).find(" > div").css("color","steelblue");
// });;

