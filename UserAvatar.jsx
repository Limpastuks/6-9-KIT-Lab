import React from "react";

class UserCard extends React.Component {
  render() {
    const { image } = this.props;
    return <img src={image} alt="Avatar" />;
  }
}

export default UserCard;
