//javascript
var dictionary = {
  onRemove: function(ev) {
    var guess = $("#guess").val();
    var messageHtml = $("#responseMessage");
    if (guess == null || guess.length == 0) {
      return;
    }
    $.post("/guess", {guess: guess})
      .done(function(data) {
        console.log("data", data);
        if (data && data.length > 0) {
          messageHtml.html(guess + " was removed from the world");
        } else {
          messageHtml.html("try again");
        } 
      });;
  }
};

var movemotor = {


  
}
