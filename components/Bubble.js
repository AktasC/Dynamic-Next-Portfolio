import React from "react";

function Bubble() {
  const childs = generateBubbles();
  return (
    <div id="bubble" className="bubbleC">
      {childs}
    </div>
  );
}

// Still a W.I.P state
function generateBubbles() {
  const reactChild = [];
  for (let i = 0; i < 20; i += 1) {
    // To get a good random number : Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let value = Math.floor(Math.random() * (190 - 14 + 1)) + 14;

    // Adding a new column/bubble in the page's container
    reactChild.push(
      <div key={i} className={`bubble bubble-${i}`}>
        {value}
        <style jsx>
          {`
            .bubble-${i} {
              height: ${value * 2}px;
              width: 30px;
              transform: translateX(${i * 30}px);
            }
          `}
        </style>
      </div>
    );
  }
  return reactChild;
}

export default Bubble;
