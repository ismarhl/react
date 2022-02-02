import React from "react";
import "../../sass/style.sass";
import CardImage from "./CardImage.js";
import CardContent from "./CardContent.js";

class Card extends React.Component {
  render() {
    return (
      <div className="card text-center ms-3 me-3">
        <CardImage />
        <CardContent myTitle={this.props.myTitle} />
      </div>
    );
  }
}

export default Card;
