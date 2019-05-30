import React from "react";

const WithAuth = UserPage => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.state({
          loggedIn: true
        });
      }
    }
    render() {
      if (this.state.loggedIn) {
        return <UserPage />;
      } else {
        return <Login />;
      }
    }
  };

export default WithAuth;
