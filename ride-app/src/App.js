import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { NavbarBrand, Nav, NavItem } from "reactstrap";
import { connect } from "react-redux";
import { logOut } from "./Actions/LoginandSignUp";
import Home from "./Components/Home";

// const NavbarBrand = () => <h1>Welcome to Ride For Life</h1>;
// const Nav = () => <h4>hello</h4>;
// const NavItem = () => <p> hello world</p>;

const loggedInNav = () => (
  <nav className="navigation">
    <NavbarBrand>Ride for Life</NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink onClick={this.logOut} className="logout">
          {" "}
          LOG OUT
        </NavLink>
      </NavItem>
    </Nav>
  </nav>
);

let loggedOutNav = (
  <nav className="navi">
    <NavbarBrand>Ride for Life</NavbarBrand>
    <Nav className="gation">
      <NavItem>
        <NavLink href="/">LOG IN</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">SIGN UP</NavLink>
      </NavItem>
    </Nav>
  </nav>
);

class App extends React.Component {
  logOut = e => {
    e.preventDefault();
    this.props.logOut();
    this.props.history.push();
  };

  render() {
    return (
      <Router>
        <div className="App">
          {localStorage.jwt ? (
            <div className="navBar">{loggedInNav}</div>
          ) : (
            <div className="navBar">{loggedOutNav}</div>
          )}
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  token: state.token
});

export default connect(
  mapStateToProps,
  { logOut }
)(App);
