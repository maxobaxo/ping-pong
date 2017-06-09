//business logic here:
var pingPong = function(userInput) {
  console.log(userInput);
  var isNumber = function(userInput) {
    var number = /^[a-zA-Z]+$/;
    if (userInput.value.match(number)) {
      return true;
    } else {
      return false;
    }
  };

  if (isNumber === false || isNaN(userInput) === true) {
    alert("Please enter a number!");
  } else {
    for (var i = 1; i <= parseInt(userInput); i += 1) {
      if (parseInt(i) % 3 === 0 && parseInt(i) % 5 === 0) {
        $("ul").append("<li class='pingpong'>ping-pong</li>");
      } else if (parseInt(i) % 5 === 0) {
        $("ul").append("<li class='pong'>pong</li>");
      } else if (parseInt(i) % 3 === 0) {
        $("ul").append("<li class='ping'>ping</li>");
      } else {
        $("ul").append("<li>" + i + "</li>");
      }
    };
  }
};

var pongPing = function(userInput) {
  var isNumber = function(userInput) {
    var number = /^[a-zA-Z]+$/;
    if (userInput.value.match(number)) {
      return true;
    } else {
      return false;
    }
  };

  if (isNumber === false || isNaN(userInput) === true) {
    alert("Please enter a number!");
  } else {
    for (var i = parseInt(userInput); i >= 1; i -= 1) {
      if (parseInt(i) % 3 === 0 && parseInt(i) % 5 === 0) {
        $("ul").append("<li class='pingpong'>ping-pong</li>");
      } else if (parseInt(i) % 5 === 0) {
        $("ul").append("<li class='pong'>pong</li>");
      } else if (parseInt(i) % 3 === 0) {
        $("ul").append("<li class='ping'>ping</li>");
      } else {
        $("ul").append("<li>" + i + "</li>");
      }
    };
  }
};

//UI logic here:
$(document).ready(function() {
  $("#normal").click(function(event) {
    event.preventDefault();

    $("ul").empty();
    var userInput = $("input#entry").val();
    var result = pingPong(userInput);
    $(".result").show(result);
  });
  $("#reverse").click(function(event) {
    event.preventDefault();
    $("ul").empty();
    var userInput = $("input#entry").val();
    var result = pongPing(userInput);
    $(".result").show(result);
  });
});
