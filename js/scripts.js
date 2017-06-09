//business logic here:
var pingPong = function(userInput) {

  if (isNaN(userInput) === true) {
    alert("Please enter a number!");
  }

  var arrUpTo = [];
  for (var i = userInput; i >= 1; i -= 1) {
    $("ul").prepend("<li>" + i + "</li>");
  }

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
