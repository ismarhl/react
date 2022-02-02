import React from "react";
import "../../sass/style.sass";
import ethereum from "../../img/icon-ethereum.svg";
import clock from "../../img/icon-clock.svg";
import avatar from "../../img/Rehailia_Portrait.png";
import "@fontsource/outfit";

class CardContent extends React.Component {
  render() {
    return (
      <div className="card-content p-3">
        <h1>{this.props.myTitle}</h1>
        <h2>Our MolenGeekatron collection promotes coding and balance</h2>
        <div className="d-flex">
          <div className="d-flex col-6 align-items-center">
            <div className="">
              <img src={ethereum} className="ethereum" />
            </div>
            <div>
              <p className="mb-0 ps-1 eth">1.00 ETH</p>
            </div>
          </div>
          <div className="d-flex col-6 justify-content-end">
            <div>
              <img src={clock} className="clock mb-1" />
            </div>
            <div className="d-flex align-items-center">
              <p className="mb-0 ps-1">3 days left</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex">
          <div>
            <img src={avatar} className="avatar" />
          </div>
          <div className="row align-items-center">
            <h3 className="ps-4 mb-0">
              Creation of <span> Isma Rhl</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CardContent;
