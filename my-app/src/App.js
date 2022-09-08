import React from "react";
import "./App.css";
import Content from "./Content";

function App() {
  let foo = () => {
    console.log("Hello LE Génie");
  }
    return (
    <div>
      <Content />
      <button onClick={foo}>Clique !</button>
    </div>
  );
}

export default App;
