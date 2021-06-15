import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Table from "./Table";

import people from "./people.json";

export default class Search extends Component {
  // State

  state = {
    results: people,
    searchTerm: "",
  };

  // finish handleInputChange
  handleInputChange = (event) => {
    // search value
    const searchValue = event.target.value;
    // filtered results
    const filteredPeople = people.filter((result) =>
      result.name.includes(searchValue)
    );
    // set state from results
    this.setState({
      results: filteredPeople,
      searchTerm: searchValue,
    });
  };

  // finish handleFormSubmit
  handleFormSubmit = (event) => {
    event.preventDefault();
    // Reset button code
    this.setState({
      results: people,
      searchTerm: "",
    });
  };
  render() {
    return (
      <div className="container">
        <SearchForm
          value={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <Table people={this.state.results} />
        </div>
      </div>
    );
  }
}
