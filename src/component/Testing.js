import React from "react";
import DrapnDrop from "./DrapnDrop";
import "./Test.css";

const data = [
  { title: "Group 1", items: ["1", "2", "3", "4"] },
  { title: "Group 2", items: ["5", "6", "7", "8"] },
];

const Testing = () => {
  return (
    <div className="App">
      <header className="App-header ">
        <DrapnDrop data={data} />
      </header>
    </div>
  );
};

export default Testing;
