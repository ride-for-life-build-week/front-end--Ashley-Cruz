import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

import { getUser } from "../Actions";
import UserCard from "./UserCard";

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        {this.props.fetchinguser ? (
          <Loader type="Puff" color="#204963" height="200" width="200" />
        ) : (
          <ul className="user-card-container">
            {this.props.user.map(user => {
              return <UserCard key={user.id} user={user} />;
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
    { getUser }
  )(UserPage)
);
