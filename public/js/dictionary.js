
//javascript
var switchToOpenMode = false;
setInterval(function() {
  $.post('/checkTrackStatus', function(data) {
    if (data && data == 'opening') {
      switchToOpenMode = true;
      window.location = "http://localhost:3000/opening.html";
    } else if (data && data == 'closing') {
      switchToOpenMode = false;
    }

  });
}, 10000);

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
        if (data && data.guess && data.guess.length > 0) {
          messageHtml.fadeIn();
          messageHtml.html(guess + " was removed from the world, thank you.")
          messageHtml.fadeOut(7000);
          play_whoosh();
        
        } else {
           messageHtml.fadeIn();
          messageHtml.html("Sorry not enough ppl requested " + guess + " to be removed from the world yet.");
          messageHtml.fadeOut(7000);
        } 
        if (data && data.atMaximum) {
      //    window.location = "https://automaton-urn.herokuapp.com/opening.html";
        }
      });;
     
  }
};

var movemotor = {


  
}
function play_whoosh() {

   var audioElement = document.createElement('audio');//plays claybreak
          audioElement.setAttribute('src', 'http://www.artandscienceanalysisgroup.net/AutomatonImages/removesound.mp3');  //plays claybreak
          audioElement.play();//plays clay break
}
