import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Dash",
      animal: "Dog",
      breed: "Dachschund",
    }),
    React.createElement(Pet, {
      name: "Whitey",
      animal: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Kiwi",
      animal: "Turtle",
      breed: "Snapping?",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
