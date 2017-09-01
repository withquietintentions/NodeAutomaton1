
var dictionary = {
  onRemove: function(ev) {
    console.log("called");
    console.log(ev);
    var guess = $("#guess").val();
    $.post("/guess", {guess: guess});
  }
};

