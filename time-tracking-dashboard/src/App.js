import React from "react";
import Card from "./components/Card.js";
import UserCard from "./components/UserCard.js";
import icon1 from "./img/icon-work.svg";
import icon2 from "./img/icon-play.svg";
import icon3 from "./img/icon-study.svg";
import icon4 from "./img/icon-exercise.svg";
import icon5 from "./img/icon-social.svg";
import icon6 from "./img/icon-self-care.svg";

function App() {
  const dataJson = require("./data.json");
  const tableauCouleurs = [
    "fond-orange",
    "fond-bleu",
    "fond-rouge",
    "fond-vert",
    "fond-mauve",
    "fond-jaune",
  ];

  const tableauIcons = [icon1, icon2, icon3, icon4, icon5, icon6];
  console.log(dataJson[0]);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-3">
          <UserCard />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            {/* <Card
              titre={dataJson[0].title}
              dailyCurrent={dataJson[0].timeframes.daily.current}
              previousCurrent={dataJson[0].timeframes.daily.previous}
              icon={icon1}
              monBackground="fond-orange"
            /> */}
            {dataJson.map((element, index) => (
              <Card
                key={index}
                titre={element.title}
                dailyCurrent={element.timeframes.monthly.current}
                previousCurrent={element.timeframes.monthly.previous}
                icon={icon1}
                monBackground={tableauCouleurs[index]}
                mesIcons={tableauIcons[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
