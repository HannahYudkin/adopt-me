import React from "react";
import { render } from "react-dom";
import Searchparams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Searchparams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
