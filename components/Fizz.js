import $ from "jquery";

function Fizz() {
  return (
    <div id="fizz" className="row">
    </div>
  );
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
    var content = "";
    //If it's a Fizz
    content += i % 3 == 0 ? "Fizz" : "";

    // If it's a Buzz
    content += i % 5 == 0 ? "Buzz" : "";

    // If it's neither of those we'll show the actual number
    content += content == "" ? i : "";

    // Purely for styling purposes.
    var style = content;

    // Let's add all these divs to our "fizz" container
    $("#fizz").append("<div class='case " + style + "'>" + content + "</div>");

    // Clear the content variable.
    content = "";
  }
}

export default Fizz;
