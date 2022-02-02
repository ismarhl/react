import React, { Component } from "react";

let current = new Date();
let date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;
let time = `${current.getHours()} h ${current.getMinutes()} and ${current.getSeconds()} seconds`;

class App extends Component {
  render() {
    return (
      <div>
        Current time is {time} <br /> Current date is {date}
      </div>
    );
  }
}

export default App;
