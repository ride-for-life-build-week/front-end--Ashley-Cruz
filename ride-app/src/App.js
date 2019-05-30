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

import "./App.css";

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
              {this.props.isLoggedIn && (
                <>
                  <NavLink exact to="/user">
                    User
                  </NavLink>
                  <NavLink to="/user/form">Add User</NavLink>
                </>
              )}
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
          <Route path="/user/form" component={AddUserForm} />
          <Route path="/user" component={UserPage} />
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
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
