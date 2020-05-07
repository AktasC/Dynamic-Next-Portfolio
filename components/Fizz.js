import $ from "jquery";

function Fizz() {
  return <div id="fizz" className="row"></div>;
}

// Workaround for Window not defined
$(document).ready(function () {
  fizzGen();
});

// Ternary conditions are love, ternary conditions are life.
function fizzGen(nb) {
  // Recruiters usually ask the candidate to perform the fizzbuzz from 1 to 100
  // But we could also choose our own minimum.
  for (var i = !nb ? 1 : nb; i <= 100; i++) {
    var value = "";
    //If it's a Fizz
    value += i % 3 == 0 ? "Fizz" : "";

    // If it's a Buzz
    value += i % 5 == 0 ? "Buzz" : "";

    // If it's neither of those we'll show the actual number
    value += value == "" ? i : "";

    // Purely for styling purposes.
    var style = value;

    // Let's add all these divs to our "fizz" container
    $("#fizz").append("<div class='case " + style + "'>" + value + "</div>");

    // Clear the value variable.
    value = "";
  }
}

export default Fizz;
