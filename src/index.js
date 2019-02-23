import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <List prat={{ name: "prat" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
