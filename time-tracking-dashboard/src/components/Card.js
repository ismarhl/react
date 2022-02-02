import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="col-md-4 col-12">
        <div className={`card ${this.props.monBackground} p-0 mb-2`}>
          <div className="container d-flex justify-content-end">
            <img className="svg" src={this.props.mesIcons} />
          </div>

          <div className="inner-card p-4">
            <div className="d-flex justify-content-between">
              <h3>{this.props.titre}</h3>
              <p>...</p>
            </div>
            <div>
              <h2>{this.props.dailyCurrent}hrs</h2>
              <p>Last Week - {this.props.previousCurrent}hrs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
