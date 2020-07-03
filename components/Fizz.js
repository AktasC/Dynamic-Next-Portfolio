import React from "react";
import { classList } from "dynamic-class-list";

function Fizz({ theme }) {
  const childs = fizzGen(theme);
  return (
    <div id="fizz" className="row">
      {childs}
    </div>
  );
}

function fizzGen(theme, nb = 1) {
  const reactChild = [];
  // Recruiters usually ask the candidate to perform the fizzbuzz from 1 to 100
  // But we could also choose our own minimum.
  for (let i = nb; i <= 100; i++) {
    let value = "";
    //If it's a Fizz
    value += i % 3 === 0 ? "Fizz" : "";

    // If it's a Buzz
    value += i % 5 === 0 ? "Buzz" : "";

    // If it's neither of those we'll show the actual number
    value += value === "" ? i : "";

    // Let's add all these divs to our "fizz" container
    reactChild.push(
      <div key={i} className={classList(["case", value, theme])}>
        {value}
      </div>
    );
    // Clear the value variable.
    value = "";
  }
  return reactChild;
}

export default Fizz;
