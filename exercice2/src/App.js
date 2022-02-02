import React, { Component } from "react";

let user = "John Doe";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bonjour {user}</h1>
      </div>
    );
  }
}

export default App;
