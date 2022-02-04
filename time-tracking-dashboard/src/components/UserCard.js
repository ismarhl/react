import React from "react";
import jeremy from "../img/image-jeremy.png"
import "../style.sass"


class UserCard extends React.Component {
    render() {
        return (
            <div className="container usercard my-4 p-0">
                <div className="user-tile m-0 p-3">
                    <div>
                        <img className="photo-jeremy" src={jeremy} />
                    </div>
                    <div className="pt-3 pb-5">
                        <h6>Report for</h6>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
                <div className="p-3">
                    <div className="pt-2">
                        <p onClick={() => this.props.myClickFunction("daily")}>Daily</p>
                        <p onClick={() => this.props.myClickFunction("weekly")}>Weekly</p>
                        <p onClick={() => this.props.myClickFunction("monthly")}>Monthly</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;