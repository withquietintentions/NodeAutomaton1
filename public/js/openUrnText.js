var statements_lose_version = [  
	{"question" : { 
		"synopsis": "Pandora was created by Hephaistos, the same creator who built atomatons? Do you want to know what atomatons are?",
		"options" : [ ("YES",["yes","YES", "Yes", "ok", "yeah", "Y"]),("NO",["no", "NO", "no", "no thanks"]) ],
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
]

//translated from python fiel

var statements = statements_lose_version
var total_questions = statements_lose_version.length
var score= 0
var lets_play = null
var question_num = 0
var play = true 


	
function whilePlay(){
		while (play == true){
		var answer1 = leading_statement(statements,question_num,score);
		//print answer1
		var score, question_num = checks_move_next_question(statements, question_num, answer1, score);
	}

function replaceQuestion() {
    var str = document.getElementById("question").innerHTML; 
    var res = str.replace("blaine", "zoe");//thing in front replaced by thing in back
    document.getElementById("question").innerHTML = res;
}


	
var opening = {
	Clickfunction: function(el,ev){
		var str = document.getElementById("clickableoptions").innerHTML= $("#question_synopsis").innerHTML((statements[question_num]["question"]["synopsis"]));
}
}




function leading_statement(statements,question_num,score){
	///Asks question and fields response
	answer = raw_input (statements[question_num]["question"]["synopsis"]); //is a string
	options = statements[question_num]["question"]["options"];// options is a list with a dictionary in it
	lose_message = statements[question_num]["question"]["lose_message"];// is a string
	for (var tupletest in options){
		if (answer in tupletest[1]){
			return tupletest[0]; //debugging
			//checks to see if in possible answers.
		}
			}
	}
	
		

function checks_move_next_question(statements, question_num, answer1, score){
	if (answer1 == "YES"){
				print statements[question_num]["question"]["lose_message"]
				print "Your final score was %d" %score
				leave_game()
			}
	elif (answer1 == "NO"){
				score += 1; //adds score when not losing
				question_num += 1; //goes to next question
			}

	else 
		print "try another answer"

	return (score, question_num)
}
	



	


