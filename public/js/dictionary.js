
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
          messageHtml.html(guess + " was removed from the world, thank you.");
        } else {
          messageHtml.html("Sorry not enough people have requested that be removed from the world yet.");
        } 
      });;
  }
};

var movemotor = {


  
}

