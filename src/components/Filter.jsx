import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      filterSearch,
    } = this.props;

    return (
      <form>
        <label htmlFor="filterSearch">
          Pesquisa:
          <input
            className="deleteButton"
            type="text"
            name="filterSearch"
            data-testid="name-filter"
            onChange={ filterSearch }
          />
        </label>
      </form>
    );
  }
}

Filter.propTypes = {
  filterSearch: PropTypes.func.isRequired,
};

export default Filter;
