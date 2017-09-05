
var statements_lose_version = [  
	{"question" : { 
		"synopsis": "Pandora was created by Hephaistos, the same creator who built atomatons? Do you want to know what atomatons are?",
		"options" : [ "yes", "no", ],
		"lose_message": "Atomatons are metal statues of animal, men and monsters, from ancient Greek Myths. The best crafted ones can think and feel like humans. You lose and so does all humanity"
	}}, 
	{"question" : {
		"synopsis": "Originally pandoras box was not a box. Was it a vase, a jar, or a basket?",
		"options": [ ("YES", ["vase", "jar", "basket"]), ("NO",[""])],
		"lose_message": "It was a JAR! You lose and so does humanity"
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs, of course , is that they are the illegitimate offspring of militarism and patriarchal capitalism...But illegitimate offspring are... Open Pandoras box to read the rest (open/No)",
		"options": [("YES", ["open"]), ("NO",["No"]) ],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto. All of humanity is doomed and you lose."
	}} 
];


var statements = statements_lose_version;
var question_num = 0;
var answer = (statements[question_num]["question"]["synopsis"]); //is a string
var options = statements[question_num]["question"]["options"];// options is a list with a dictionary in it
var lose_message = statements[question_num]["question"]["lose_message"];// is a string
var total_questions = statements_lose_version.length;
var score= 0;
var lets_play = null;
var play = true ;


window.onload = function() {

        what();

        function what() {
            document.getElementById('question_synopsis').innerHTML = answer;
            document.getElementById('options').innerHTML = options[0] + " " + options[1];
        };

    }
