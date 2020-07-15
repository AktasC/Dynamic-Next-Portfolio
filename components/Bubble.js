import React from "react";
import bubbleStyles from "./Bubble.module.css";

function Bubble() {
  const childs = generateBubbles();
  return <div className={bubbleStyles.bubbleC}>{childs}</div>;
}

function generateBubbles() {
  const reactChilds = [];

  for (let i = 0; i < 20; i += 1) {
    // To get a good random number : Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let value = Math.floor(Math.random() * (190 - 14 + 1)) + 14;

    // Adding a new column/bubble in the reactChilds array
    reactChilds.push(
      <div
        key={i}
        className={`${bubbleStyles.bubble}`}
        style={{
          height: `${value * 2}px`,
          transform: `translateX(${i * 30}px)`,
        }}
      >
        {value}
      </div>
    );
  }
  //sortBubbles(reactChilds);

  return reactChilds;
}

/* TODO */
// Must need to be an async function so we can animate the transform change
function sortBubbles(bubbles) {
  const data = bubbles;
  // This should only be executed on the client-side
  if (process.browser) {
    for (let i = 0; i < data.length - 1; i += 1) {
      for (let j = 0; j < data.length - i - 1; j += 1) {
        let elem1 = data[j];
        let elem2 = data[j + 1];

        // Values of the elements
        let val1 = elem1.props.children;
        let val2 = elem2.props.children;

        // Distinguish which ones are currently checked
        elem1.props.style.backgroundColor = "#d500f9";
        elem2.props.style.backgroundColor = "#d500f9";

        if (val1 > val2) {
          // console.log("Swap needed: " + val1 + " and " + val2);

          let tempStyle = elem1.props.style.transform;

          elem1.props.style.transform = elem2.props.style.transform;
          elem2.props.style.transform = tempStyle;
        }

        // A setTimeout with a bubbleContainer.insertBefore might do the trick.
        // But since this is uses nextJS it might need some workarounds...
        // TODO
      }
    }
    console.log(data);
  }
}

export default Bubble;
