import React from "react";
import jeremy from "../img/image-jeremy.png";

class UserCard extends React.Component {
  render() {
    return (
      <div className="card-user m-1">
        <div className="container-user container p-4 pb-5">
          <img className="user-image my-3" src={jeremy} />
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>

        <div className="inner-card-user container p-4">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
