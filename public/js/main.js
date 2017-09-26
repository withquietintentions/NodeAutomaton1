//inserts keyboard


$(document).ready(function(){
	$('#guess').keyboard({ layout: 'qwerty',
	css: {
			// input & preview
			// "label-default" for a darker background
			// "light" for white text
			input: 'form-control input-sm dark',
			// keyboard container
			container: 'center-block well',
			// default state
			buttonDefault: 'btn btn-default',
			// hovered button
			buttonHover: 'btn-primary',
			// Action keys (e.g. Accept, Cancel, Tab, etc);
			// this replaces "actionClass" option
			buttonAction: 'active',
			// used when disabling the decimal button {dec}
			// when a decimal exists in the input area
			buttonDisabled: 'disabled'
		} });
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

///clears keyboard
  
$("#guess").click(function(){
  var kb = $('#guess').getkeyboard();
  $.keyboard.keyaction.clear(kb);
  kb.$preview.focus();
});