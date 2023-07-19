import React from "react";

function Alpha({ setIndex }) {
  const array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="alpha">
      {array.map((item, index) => {
        return (
          <div
            className="alpha-item"
            key={index}
            onClick={() => setIndex(item)}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Alpha;
