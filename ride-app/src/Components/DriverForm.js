import React from "react";
import { connect } from "react-redux";

import { addUser } from "../Actions";
import { users } from "../App.js";

class DriverForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      userType: "",
      id: ""
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
        {/* <button link="/home" className="cancel-btn" onClick={this.cancelForm}>
          X
        </button> */}
        <form onSubmit={this.handleSubmit}>
          <h2>My Driver Account</h2>
          <label>ID </label>
          <input
            disabled
            type="id"
            // placeholder="Name"
            name="name"
            value={this.state.id}
            onChange={this.handleInput}
          />
          <br />
          <label>Name </label>
          <input
            type="text"
            // placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />
          <label>Email </label>
          <input
            type="text"
            // placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />
          <label>Password </label>
          <input
            type="text"
            // placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />
          <label>User Type </label>
          <select disabled>
            <option value="driver">Driver</option>
          </select>
          {/* <input
            type="select"
            placeholder="User Type"
            name="userType"
            value={this.state.userType}
            onChange={this.handleInput}
          /> */}
          <br />
          <button className="save-driver-btn">Save</button>
          <button className="edit-btn">Edit Account</button>
          <button className="delete-btn">Delete Account</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addUser }
)(DriverForm);
