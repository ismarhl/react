import React from "react";
import "../../sass/style.sass";
import equilibrium from "../../img/mg.gif";

class CardImage extends React.Component {
  render() {
    return (
      <div>
        <img src={equilibrium} className="equilibrium mt-3" />
      </div>
    );
  }
}

export default CardImage;
