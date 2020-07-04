import React from "react";

function Bubble() {
  const childs = generateBubbles();
  return (
    <div id="bubble" className="bubbleC">
      {childs}
    </div>
  );
}

// Still in a W.I.P state
function generateBubbles() {
  const reactChild = [];
  for (let i = 0; i < 20; i += 1) {
    
    // To get a good random number : Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let value = Math.floor(Math.random() * (150 - 2 + 1)) + 2;

    // Adding a new column/bubble in the page's container
    reactChild.push(
      <div key={i} className={`bubble bubble-${i}`}>
        {value}
        <style jsx="true" global="false">
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
