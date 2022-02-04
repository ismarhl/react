import React from "react";
import "../style.sass"
import icon from "../img/icon-work.svg"


class Card extends React.Component {
    render() {
        return (
            <div className="container card my-md-4 m-2 mx-1 p-0 col-12 col-md-3">
                <div className={`card-background ${this.props.bgColor}`}>
                    <div className="text-end">
                        <img className="icon me-2" src={this.props.myIcon} />
                    </div>
                    <div className="card-content p-3">
                        <div className="d-flex justify-content-between">
                            <p>{this.props.activtyCategory}</p>
                            <p>...</p>
                        </div>
                        <div>
                            <h2>{this.props.timeSpent}hrs</h2>
                            <p>Last Week - {this.props.lastWeekSpent}hrs</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;