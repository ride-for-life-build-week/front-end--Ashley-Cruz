import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

import { getUser, updatingUser, deleteUser } from "../Actions";
import UserCard from "./UserCard";

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  deleteUSer = (e, id) => {
    this.props.deleteUser(id);
  };

  render() {
    return (
      <div>
        {this.props.fetchinguser ? (
          <Loader type="Puff" color="#204963" height="200" width="200" />
        ) : (
          <ul className="user-card-container">
            {this.props.user.map(user => {
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  deleteUser={this.props.deleteUser}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  fetchinguser: state.fetchinguser
});

export default withRouter(
  connect(
    mapStateToProps,
    { getUser, deleteUSer }
  )(UserPage)
);
