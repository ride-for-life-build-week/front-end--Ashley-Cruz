import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import UserCard from "./UserCard";

import { getDriver, deleteDriver } from "./";

class DriverList extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  deleteDriver = (e, id) => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="smurf-list">
        {this.props.fetchingSmurfs ? (
          <Loader type="Circles" color="navy" height={80} width={80} />
        ) : (
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <SmurfCard
                  key={smurf.id}
                  smurf={smurf}
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                  deleteSmurf={this.props.deleteSmurf}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, deleteSmurf }
)(SmurfsList);
