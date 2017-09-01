
var dictionary = {
  onRemove: function(ev) {
    var guess = $("#guess").val();
    var messageHtml = $("#responseMessage");
    $.post("/guess", {guess: guess})
      .done(function(data) {
        console.log(data);
        if (data != null) {
          messageHtml.html(guess + " was removed from the world");
        } else {
          messageHtml.html("try again");
        } 
      });;
  }
};

