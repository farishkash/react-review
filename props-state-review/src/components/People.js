import React, { Component } from "react";
import Table from "./Table";

const apiURL = "https://randomuser.me/api/?results=10&nat=us";

class People extends Component {
  state = {
    users: [],
  };

  handleData = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        return this.setState({ users: data.results });
      });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleData}>
          Get Data
        </button>
        <div className="container">
          <Table users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default People;
