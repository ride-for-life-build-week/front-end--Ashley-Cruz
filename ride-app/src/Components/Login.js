import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../Actions/LoginandSignUp.js";
// /Users/miguel/Lambda/week10/bw-bike/front-end--Ashley-Cruz/ride-app/src/Components/Login.js
// /Users/miguel/Lambda/week10/bw-bike/front-end--Ashley-Cruz/ride-app/src/Actions/LoginandSignUp.js

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    this.props.history.push("/questionlist");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.login} className="login">
          <input
            name="username"
            type="text"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <br />
          {this.props.error && <p className="error">{this.props.error}</p>}
          <button type="submit">LOG IN</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error,
  signingUp: state.signingUp
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
