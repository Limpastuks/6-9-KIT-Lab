import React from "react";

import Button from "./Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RemoveFriend } from "./actions/index";
import "./styles.css";

class BestFriendCard extends React.Component {
  render() {
    const { friend } = this.props;

    return (
      <div className="card">
        <div>{friend}</div>
        <Button
          label="Remove from friends"
          handleClick={() => this.props.RemoveFriend(friend)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ RemoveFriend: RemoveFriend }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BestFriendCard);
