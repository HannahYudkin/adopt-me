import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Dash",
  //     animal: "Dog",
  //     breed: "Dachschund",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Whitey",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Kiwi",
  //     animal: "Turtle",
  //     breed: "Snapping?",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Dash" animal="Dog" breed="Dachschund" />
      <Pet name="Whitey" animal="Cat" breed="Mixed" />
      <Pet name="Kiwi" animal="Turtle" breed="Snapping?" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
