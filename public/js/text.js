
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

//on load of page
window.onload = function(question_num) {

        printQuestion();

        function printQuestion() {
            $('#question_synopsis').text(answer);
            $('#optionsA').text(optionsA.join('\r\n'));//reads all in list but joins them
            $('#optionsN').text(optionsN.join('\r\n'));//reads all in list
             $('#optionsA').click(function(){//clicking to know more
             	$('#question_synopsis').hide();
             	$('#optionsA').hide();
             	$('#optionsN').hide();
        		$("#lose_message").text(lose_message).show();
        		$("#urn_opening").text("Urn will open...").show();
        		//send event here for motor to open by 1
        		//tigger breaking sound here
        		$("#play_again").text("Play Again?").show();
        		$("#play_again").click(function(){
        			$("#lose_message").hide();
        			$("#urn_opening").text("Urn will open...").hide();
        			$("#play_again").text("Play Again?").hide();
        			//move foward one question
        			});
        		question_num ++;
        		return question_num;

        		
    		});

        }
    }
   
// $.each(array, function(index, value){
//     $('.element').html( $('.element').html() + '<span>' + value +'</span>')
// });
    //hover for links in options
// $(".hover").mouseover(function() {
//     $(this).find(" > div").css("color", "cyan");
// }).mouseout(function() {
//     $(this).find(" > div").css("color","steelblue");
// });;

