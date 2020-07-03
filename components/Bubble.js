import $ from "jquery";
import { Container } from "react-bootstrap";

function Bubble() {
  return (
    <Container id="bubble" className="bubbleC">
      <h1>Work In Progress</h1>
    </Container>
  );
}

if (process.browser) {
  $(document).ready(function () {
    generateBubbles();
  });
}

// Still in a W.I.P state
function generateBubbles() {
  for (let i = 0; i < 20; i += 1) {
    let value = Math.floor(Math.random() * 100);
    // Adding a new column/bubble in the page's container
    $("#bubble").append("<div class='bubble bubble-" + value + "'></div>");
    // Setting each of these elements to have a size according to their value
    $(".bubble-" + value)
      .css("height", value * 2 + "px")
      .css("transform", "translateX(" + i * 30 + "px)")
      .html(value);
    console.log("Transform:" + i * 30);
  }
}

export default Bubble;
