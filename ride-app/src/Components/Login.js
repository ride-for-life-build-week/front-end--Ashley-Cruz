import React from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import { login } from "../Actions";
import { users } from "../App.js";

class Login extends React.Component {
  // state = store.getState();
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleInput = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state);
  };

  handleClick = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      var username = this.state.credentials.username;
      var pw = this.state.credentials.password;
      var userAttemptingLogin = users.find(function(user) {
        return user.email === username;
      });
      if (!userAttemptingLogin) {
        console.log("user not found");
      } else {
        console.log("user found");
        if (pw === userAttemptingLogin.password) {
          console.log("password matches");
          this.setState({ user: userAttemptingLogin });
          if (userAttemptingLogin.userType === "user")
            this.props.history.push("/UserForm");
          else this.props.history.push("/DriverForm");
        } else console.log("password does not match");
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Please Sign In</h2>
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder="Username"
            onChange={this.handleInput}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder="Password"
            onChange={this.handleInput}
          />
          <button>
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
