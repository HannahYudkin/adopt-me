const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
