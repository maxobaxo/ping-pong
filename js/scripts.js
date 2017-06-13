//business logic here:
var pingPong = function(userInput) {
  var number = parseInt(userInput);
  var integers = [];

  if ((Number.isInteger(number)) === false || isNaN(userInput) === true) {
    alert("Please enter a number!");
  } else {
    for (var i = 1; i <= number; i += 1) {
      if (parseInt(i) % 3 === 0 && parseInt(i) % 5 === 0) {
        integers.push("ping-pong");
      } else if (parseInt(i) % 5 === 0) {
        integers.push("pong");
      } else if (parseInt(i) % 3 === 0) {
        integers.push("ping");
      } else {
        integers.push(i);
      }
    };
  }
  return integers;
};

var pongPing = function(userInput) {
  var number = parseInt(userInput);
  var integers = [];

  if ((Number.isInteger(number)) === false || isNaN(userInput) === true) {
    alert("Please enter a number!");
  } else {
    for (var i = parseInt(userInput); i >= 1; i -= 1) {
      if (parseInt(i) % 3 === 0 && parseInt(i) % 5 === 0) {
        integers.push("ping-pong");
      } else if (parseInt(i) % 5 === 0) {
        integers.push("pong");
      } else if (parseInt(i) % 3 === 0) {
        integers.push("ping");
      } else {
        integers.push(i);
      }
    };
  }
  return integers;
};

//UI logic here:
$(document).ready(function() {
  $("#normal").click(function(event) {
    event.preventDefault();

    $("ul").empty();
    var userInput = $("input#entry").val();
    var result = pingPong(userInput);
    result.forEach(function(item) {
      $("ul").append("<li>" + item + "</li>");
    });
    $(".result").show(result);
  });
  $("#reverse").click(function(event) {
    event.preventDefault();

    $("ul").empty();
    var userInput = $("input#entry").val();
    var result = pongPing(userInput);
    result.forEach(function(item) {
      $("ul").append("<li>" + item + "</li>");
    });
    $(".result").show(result);
  });
});
