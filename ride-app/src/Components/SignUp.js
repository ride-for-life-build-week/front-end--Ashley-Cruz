import React from "react";
import { connect } from "react-redux";
import { signup } from "../Actions/LoginandSignUp.js";
// import { signup } from "../Actions/LoginandSignUp.js";

class SignUp extends React.Component {
  state = {
    authorization: {
      email: "",
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      authorization: {
        ...this.state.authorization,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.authorization);
    alert("Registration Successful");
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.signup} className="signup">
          <input
            name="email"
            type="text"
            placeholder="email"
            value={this.state.authorization.email}
            onChange={this.handleChanges}
          />
          <br />
          <input
            name="username"
            type="text"
            placeholder="username"
            value={this.state.authorization.username}
            onChange={this.handleChanges}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.authorization.password}
            onChange={this.handleChanges}
          />
          <button type="submit">SIGN UP</button>
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
  { signup }
)(SignUp);
