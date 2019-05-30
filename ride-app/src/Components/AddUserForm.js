import React from "react";
import { connect } from "react-redux";

import { addUser } from "../Actions";

class AddUserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // if (
    //   localStorage.token
    //   //   this.state.name === "" ||
    //   //   this.state.username === "" ||
    //   //   this.state.email === "" ||
    //   //   this.state.password === ""
    // ) {
    this.props.addUser(this.state).then(() => this.props.history.push("/"));
    // } else {
    // }

    this.setState({ name: "", email: "", username: "", password: "" });
  };

  cancelForm = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="user-form">
        <button link="/home" className="cancel-btn" onClick={this.cancelForm}>
          X
        </button>
        <form onSubmit={this.handleSubmit}>
          <h2>Create a new Account</h2>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button className="add-user-btn">Register</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addUser }
)(AddUserForm);
