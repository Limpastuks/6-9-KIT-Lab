import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendsList from "../BestFriendsList";

class Friend extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Friends</h2>
        <div>
          <BestFriendsList friends={this.props.friends} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(Friend);
