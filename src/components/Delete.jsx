import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delete extends Component {
  render() {
    const {
      deleteButton,
      cardName,
    } = this.props;
    return (
      <button
        className="deleteButton"
        type="button"
        data-testid="delete-button"
        onClick={ () => deleteButton(cardName) }
      >
        Excluir
      </button>
    );
  }
}

Delete.propTypes = {
  deleteButton: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default Delete;
