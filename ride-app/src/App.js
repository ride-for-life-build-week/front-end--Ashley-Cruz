import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import { connect } from 'react-redux';
import Home from './Components/Home';


class App extends React.Component{

  render(){
    return (
      <Router>
      <div className="App">
        <nav className="navigation-bar">
          <div className="nav-links"> 
          <NavLink exact to="/">Home</NavLink>
    
          </div>
          <div>
            {!this.props.isLoggedIn ? (
               <Link to="/Login">Log In</Link>
            ) : <Link to="/" onClick={logout}>Log Out</Link> 
            }
          </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}

function logout() {
  localStorage.removeItem('token')
    window.location.reload(true);
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {} )(App);




