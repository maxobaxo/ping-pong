//business logic here:
var pingPong = function(userInput) {

  if (typeof userInput !== "number") {
    alert("Please enter a number!");
  } else {
    var userResult = userInput;
    return userResult;
  }
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
