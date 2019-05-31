import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
// import PrivateRoute from "./PrivateRoute";
import Login from "./Components/Login";
import Home from "./Components/HomePage";
import UserPage from "./Components/UserPage";
import AddUserForm from "./Components/AddUserForm";
import DriverForm from "./Components/DriverForm";

import "./App.css";
import UserForm from "./Components/UserForm";

export const users = [];

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navigation-bar">
            <div className="nav-links">
              <NavLink exact to="/">
                Home
              </NavLink>
              {this.props.isLoggedIn && <></>}
              <div>
                <NavLink to="/AddUserForm">Register</NavLink>
              </div>
            </div>
            <div>
              {!this.props.isLoggedIn ? (
                <Link to="/login">Log In</Link>
              ) : (
                <Link to="/" onClick={logout}>
                  Log Out
                </Link>
              )}
            </div>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/AddUserForm" component={AddUserForm} />
          <Route path="/DriverForm" component={DriverForm} />
          <Route path="/UserForm" component={UserForm} />
        </div>
      </Router>
    );
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.reload(true);
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(App);
