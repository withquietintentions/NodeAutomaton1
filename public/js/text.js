 var statements_lose_version = [  
 	{"question" : { 
		"synopsis": "Do you want to know what automatons are?",
		"optionsA" : [ "yes","maybe"],
		"optionsN" : [ "no", "nah"],
		"lose_message": "Atomatons were metal statues of animal, men and monsters, from ancient Greek Myths. The best crafted ones can think and feel like humans."
	}}, 
	{"question" : {
		"synopsis": "Originally pandoras box was not a box. Was it a vase, a jar, or a basket?",
		"optionsA": [ "vase", "jar", "basket"],
		"optionsN": ["I don't care. ", "don't at all. ", "nope"],
		"lose_message": "It was a JAR! You lose and so does humanity"
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs, of course , is that they are the illegitimate offspring of militarism and patriarchal capitalism...But illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto. All of humanity is doomed and you lose."
	}} 
];

var question_num = 0;
var statements = statements_lose_version;
var answer = statements[question_num]["question"]["synopsis"]; //is a string
var optionsA = statements[question_num]["question"]["optionsA"];// options is a list 
var optionsN = statements[question_num]["question"]["optionsN"];// options is a list 
var lose_message = statements[question_num]["question"]["lose_message"];// is a string
var total_questions = statements_lose_version.length;
var num1 = 0;
var $question = $('#question_synopsis');
var $optionsA = $('#optionsA');
var $optionsN = $('#optionsN');
var $playAgain = $("#play_again");
var $loseMessage = $("#lose_message");
var $urnOpening = $("#urn_opening")
var $options = $('#options');
var play = true;

function OpeningPage(question_num){

 
	$question.text(answer);
	var num = 0;
	for (num= 0; num<optionsA.length; num++){	
	var enter_negative = optionsA[num];
	$optionsA.append('<li>'+enter_negative+'</li>');
	} 
	for(num1=0; num1<optionsN.length; num1++){	
	var enter_affirmative = optionsN[num1];
	$optionsN.append('<li>'+enter_affirmative+'</li>');
	}
	//question_num++;

	$optionsA.click(function(){
		$question.hide();
		$options.hide();
		$loseMessage.text(lose_message);
		$urnOpening.text("urn opening...");
	});

	}

	function OnClick(question_num){
		this.question_num++;
		return this.question_num;
		
		
	}


///where state change betweeen opened and closed will occur///
 $("#button").click(function ChangeState(question_num, num, num1){//temp testing to switch
	window.location.href = "http://localhost:3000/";//sends it back to other game ('port', (process.env.PORT || 3000));
 	});
// ///


//ChangeState(question_num, num, num1);

OpeningPage(this.question_num);
question_num = OnClick(this.question_num)


	
//num1 =OpeningPage(question_num, num, num1);





