import React from "react";
import bubbleStyles from "./Bubble.module.css";

function Bubble() {
  const childs = generateBubbles();
  return (
    /*Bubble Container*/
    <div className={bubbleStyles.bubbleC}>{childs}</div>
  );
}

// Still a W.I.P
function generateBubbles() {
  const reactChild = [];

  for (let i = 0; i < 20; i += 1) {
    // To get a good random number : Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let value = Math.floor(Math.random() * (190 - 14 + 1)) + 14;

    // Adding a new column/bubble in the reactChild array
    reactChild.push(
      <div key={i} className={`${bubbleStyles.bubble} bubble-${value}`}>
        {value}
        <style jsx>
          {`
            .bubble-${value} {
              height: ${value * 2}px;
              transform: translateX(${i * 30}px);
            }
          `}
        </style>
      </div>
    );
  }

  //sortBubbles(reactChild);

  return reactChild;
}

function sortBubbles(data) {
  /* TODO
   * data is an array of JSX elements (divs)
   * Starting at the end of the array, we need to compare each N element with it's N-1 neighbor
   * If N < N-1 then we need to swap these elements by swaping their 'transform' property
   */

  /* This is a shallow copy meaning it's a referenced copy instead of a value-based 'perfect clone'
   */

  // const bubbles = { ...data };
  // console.log(data === bubbles);// -> False
  // console.log(data[0] === bubbles[0]);// -> True

  /* This is a dirty workaround normally giving a "kinda deep clone" even with nested arrays
   * But this actually gives a cyclic object value error when compiled, even when SSR is disabled
   */

  // const bubbles = JSON.parse(JSON.stringify(data));
  // return bubbles;
}

export default Bubble;
