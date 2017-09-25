//inserts keyboard


$(document).ready(function(){
	$('#guess').keyboard({ layout: 'qwerty' });
	//.addTyping();
})


// MAKES enter KEY WORK!
$.keyboard.keyaction.enter = function(base){
  if (base.el.tagName === "INPUT") {
    base.accept();      // accept the content
    $('form').submit(); // submit form on enter
  } else {
    base.insertText('\r\n'); // textarea
  }
};