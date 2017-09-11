

 var statements_lose_version = [  
 	{"question" : { 
		"synopsis": "Do you know who created Pandora?",
		"optionsA" : [ "yes","maybe"],
		"optionsN" : [ "no", "nah"],
		"lose_message": "Pandora was created by Hephastios, a metal smith known for his Automatons (metal sculptures who could think and act)."
	}}, 
	{"question" : {
		"synopsis": "Do you know why the Gods came to Hephastos to build her?",
		"optionsA": [ "no, tell me"],
		"optionsN": ["I don't care. "],
		"lose_message": "Becasue he was an awesome hardware dude, but also because man had stole fire and they worried this was elevating man to god like status."
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto, 1984."
	}},
	{"question" : {
		"synopsis": "Closer at hand and perhaps equally decisive is another no less threatening event. This is the advent of automation, which in a few decades probably will empty the factories and liberate mankind from its oldest and most natural burden, the burden of laboring and the bondage to necessity. Here, too, a fundamental aspect of the human condition is at stake, but the rebellion against it, the wish to be liberated from labor's -toil and trouble,- is not modern but as old as recorded history. ",
		"optionsA": ["who said this?"],
		"optionsN": ["who care?"],
		"lose_message": "Hannah Ardent, The Human Condition-1958"
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto."
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto."
	}},
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto."
	}}, 
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto."
	}},
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto."
	}},
	{"question" : {
		"synopsis": "The main trouble with cyborgs is that they are the illegitimate offspring of militarism and patriarchal capitalism, but illegitimate offspring are...",
		"optionsA": ["open to read rest"],
		"optionsN": ["no thanks"],
		"lose_message": "often exceedingly unfaithful to their origins. Their fathers, after all, are inessential - Donna Haraway A Cyborg Manifesto."
	}},
]


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
var play = true;   // script is now loaded and executed.
    // put your dependent JS here.

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
//for (var i =0; i<statements_lose_version.length; i++){
OpeningPage(this.question_num);
//}
question_num = OnClick(this.question_num)



	
//num1 =OpeningPage(question_num, num, num1);





