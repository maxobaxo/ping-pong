//business logic here:


//UI logic here:
$(document).ready(function() {
  $(".main-form").submit.(function(event) {
    var userInput = $("input#entry").val();
    var result = functName(userInput);
    $(".result").text(result);
  });
});
