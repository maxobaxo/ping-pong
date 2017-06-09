//business logic here:
var pingPong = function(userInput) {

  if (isNaN(userInput) === true) {
    alert("Please enter a number!");
  }

  var arrUpTo = [];
  $("ul").empty();
  for (var i = userInput; i >= 1; i -= 1) {
    if (parseInt(i) % 3 === 0) {
      $("ul").prepend("<li>ping</li>");
    } else if (parseInt(i) % 5 === 0) {
      $("ul").prepend("<li>pong</li>");
    } else if (parseInt(i) % 3 === 0 && parseInt(i) % 5 === 0) {
      $("ul").prepend("<li>pingpong</li>");
    } else {
    $("ul").prepend("<li>" + i + "</li>");
    }
  };

  // var userString = userInput.toString();
  // var userArr = [];
  //
  // for (var i = 0; i < userString.length; i++) {
  //   userArr.push(userString[i]);
  //   $("ul").prepend("<li>" + userArr[i] + "</li>");
  // }



  // var userArr = userInput.split("");
  // for (var i = 0; i < userArr.length; i++) {
  //   userArr[i] = parseInt(userArr[i]);
  // }
  // return userArr;
};

//UI logic here:
$(document).ready(function() {
  $(".main-form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#entry").val());
    var result = pingPong(userInput);
    $(".result").show(result);
  });
});
