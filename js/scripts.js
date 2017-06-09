//business logic here:
var pingPong = function(userInput) {
  userInput = result;
  return result;
};

//UI logic here:
$(document).ready(function() {
  $(".main-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#entry").val();
    var result = pingPong(userInput);
    $(".result").text(result);
  });
});
