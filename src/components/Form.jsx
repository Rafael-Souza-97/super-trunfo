import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <>
        <div className="formNome">
          <label htmlFor="textNome">
            Nome:
            <input
              type="text"
              name="cardName"
              id="textNome"
              placeholder="Digite o nome"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
        </div>

        <div className="formDescricao">
          <label htmlFor="textArea">
            Descrição da Carta:
            <textarea
              name="cardDescription"
              id="textArea"
              placeholder="Digite a descrição"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
        </div>

        <div className="formAtributo1">
          <label htmlFor="number1">
            Atributo 1:
            <input
              type="number"
              name="cardAttr1"
              id="number1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>
        </div>

        <div className="formAtributo2">
          <label htmlFor="number2">
            Atributo 2:
            <input
              type="number"
              name="cardAttr2"
              id="number2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
        </div>

        <div className="formAtributo3">
          <label htmlFor="number3">
            Atributo 3:
            <input
              type="number"
              name="cardAttr3"
              id="number3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
        </div>

        <div className="formImgInput">
          <label htmlFor="inputImage">
            Imagem:
            <input
              type="text"
              name="cardImage"
              id="inputImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
        </div>

        <div className="formSelect">
          <label htmlFor="selectValue">
            Raridade:
            <select
              id="selectValue"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>

        <div className="formCheckbox">
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
            Super Trybe Trunfo
          </label>
        </div>

        <div className="formSaveButton">
          <button
            type="button"
            value="Salvar"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
