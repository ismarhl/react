import React from "react";
import "./sass/style.sass";
import Card from "./components/card/Card.js";

function App() {
  let myFunction = () => {};
  let title1 = "MonlenGeekatron #001";
  let title2 = "MonlenGeekatron #002";
  let title3 = "MonlenGeekatron #003";
  return (
    <div
      onMouseOver={myFunction}
      className="container-fluid d-flex justify-content-center align-items-center"
    >
      <Card myTitle={title1} />
      <Card myTitle={title2} />
      <Card myTitle={title3} />
    </div>
  );
}

export default App;
