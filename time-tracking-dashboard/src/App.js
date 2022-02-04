import React from "react";
import UserCard from "./components/usercard.js";
import Card from "./components/card.js";
import "./style.sass"
import icon1 from "./img/icon-work.svg"
import icon2 from "./img/icon-play.svg"
import icon3 from "./img/icon-study.svg"
import icon4 from "./img/icon-exercise.svg"
import icon5 from "./img/icon-social.svg"
import icon6 from "./img/icon-self-care.svg"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "daily",
    };
    {
      this.modifyValue = this.modifyValue.bind(this);
    }
  }
  modifyValue(element) {
    this.setState({value: element});
  }
  render() {
    const dataJson = require("./data.json");
    const iconArray = [icon1, icon2, icon3, icon4, icon5, icon6];
    const bgColorArray = ["orange-bg", "blue-bg", "red-bg", "green-bg", "purple-bg", "yellow-bg"]
    return (
      <div className="container-fluid">
        <div className="row justify-content-center p-3">
          <div className="col-12 col-md-3 p-0">
            <UserCard myClickFunction={this.modifyValue}/>
          </div>
          <div className="col-12 col-md-9 row justify-content-evenly p-0">
            {/* Boucle sur la card qui va chercher dans le tableau dataJson les infos */}
            {dataJson.map((element, index) => (
              <Card 
                key={index}
                myIcon={iconArray[index]}
                bgColor={bgColorArray[index]}
                activtyCategory={element.title}
                timeSpent={element.timeframes[this.state.value].current}
                lastWeekSpent={element.timeframes[this.state.value].previous}
              />
              ))}
            
            {/* 
            <Card
              myIcon={iconArray[5]}
              bgColor={bgColorArray[5]}
              activtyCategory={dataJson[5].title}
              timeSpent={dataJson[5].timeframes.daily.current}
              lastWeekSpent={dataJson[5].timeframes.daily.previous}
            /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
