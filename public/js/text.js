$.get('/questions.json', function(data) {
	console.log(data);
	var statements_lose_version = data;
	startLoop(statements_lose_version);
})

function startLoop(statements_lose_version) {
	var question_num = 0;

	var $question = $('#question_synopsis');
	var $optionsA = $('#optionsA');
	var $optionsN = $('#optionsN');
	var $playAgain = $("#play_again");
	var $loseMessage = $("#lose_message");
	var $urnOpening = $("#urn_opening")
	var $options = $('#options');

	$playAgain.click(function() {
		incrementQuestionNum();
		loadQuestion()
	});

	$optionsN.click(function() {
		incrementQuestionNum();
		loadQuestion()
	});

	$optionsA.click(function(){
		$question.empty();
		$optionsA.empty();
		$optionsN.empty();
		var lose_message = statements_lose_version[question_num]["question"]["lose_message"];// is a string
		$loseMessage.text(lose_message);
		$urnOpening.text("urn will open...");
		$playAgain.text("PLAY AGAIN");
		play_clay();
	});


	function loadQuestion() {
		var answer = statements_lose_version[question_num]["question"]["synopsis"]; //is a string
		var optionsA = statements_lose_version[question_num]["question"]["optionsA"];// options is a list 
		var optionsN = statements_lose_version[question_num]["question"]["optionsN"];// options is a list 
		console.log(optionsA)
		$question.text(answer);
		$optionsA.empty();
		$optionsN.empty();
		$playAgain.empty();
		$loseMessage.empty();
		$urnOpening.empty();

		var num = 0;
		for (num= 0; num<optionsA.length; num++){	
			var enter_negative = optionsA[num];
			console.log(enter_negative)
			$optionsA.append('<li>'+enter_negative+'</li>');
			console.log($optionsA)
		} 
		for(var num1=0; num1<optionsN.length; num1++){	
			var enter_affirmative = optionsN[num1];
			$optionsN.append('<li>'+enter_affirmative+'</li>');
		}
	}

	function incrementQuestionNum() {
		question_num += 1;
		question_num = question_num % statements_lose_version.length;
	}

	loadQuestion();
}

function play_clay() {

   var audioElement = document.createElement('audio');//plays claybreak
          audioElement.setAttribute('src', 'http://www.artandscienceanalysisgroup.net/AutomatonImages/claybreakshort.mp3');  //plays claybreak
          audioElement.play();//plays clay break
}



 
