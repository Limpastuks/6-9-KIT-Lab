import React from "react";
import "../styles.css";
import UsersList from "../UsersList";
import { connect } from "react-redux";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async getUsers() {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const usersJSON = await response.json();

    if (usersJSON && usersJSON.results) {
      this.setState({ users: usersJSON.results });
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Users:</h2>
        <div>{<UsersList users={users} />}</div>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(Users);


