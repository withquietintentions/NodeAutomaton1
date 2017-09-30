
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
          messageHtml.fadeIn();
          messageHtml.html(guess + " was removed from the world, thank you.")
          messageHtml.fadeOut(7000);
          play_clay();
        
        } else {
           messageHtml.fadeIn();
          messageHtml.html("Sorry not enough ppl requested " + guess + " to be removed from the world yet.");
          messageHtml.fadeOut(7000);
        } 
      });;
     
  }
};

var movemotor = {


  
}
function play_clay() {

   var audioElement = document.createElement('audio');//plays claybreak
          audioElement.setAttribute('src', 'http://www.artandscienceanalysisgroup.net/AutomatonImages/removesound.mp3');  //plays claybreak
          audioElement.play();//plays clay break
}
