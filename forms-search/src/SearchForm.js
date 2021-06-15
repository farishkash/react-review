import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="searchTerm"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
