import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <div className="formNome">
          <label htmlFor="textNome">
            Nome:
            <input
              type="text"
              name="textNome"
              id="textNome"
              placeholder="Digite o nome"
              data-testid="name-input"
            />
          </label>
        </div>

        <div className="formDescricao">
          <label htmlFor="textArea">
            Descrição da Carta:
            <textarea
              name="textArea"
              id="textArea"
              placeholder="Digite a descrição"
              data-testid="description-input"
            />
          </label>
        </div>

        <div className="formAtributo1">
          <label htmlFor="number1">
            Atributo 1:
            <input
              type="number"
              name="number1"
              id="number1"
              placeholder="Digite o primeiro atributo da carta"
              data-testid="attr1-input"
            />
          </label>
        </div>

        <div className="formAtributo2">
          <label htmlFor="number2">
            Atributo 2:
            <input
              type="number"
              name="number2"
              id="number2"
              placeholder="Digite o segundo atributo da carta"
              data-testid="attr2-input"
            />
          </label>
        </div>

        <div className="formAtributo3">
          <label htmlFor="number3">
            Atributo 3:
            <input
              type="number"
              name="number3"
              id="number3"
              placeholder="Digite o terceiro atributo da carta"
              data-testid="attr3-input"
            />
          </label>
        </div>

        <div className="formImgInput">
          <label htmlFor="inputImage">
            Imagem:
            <input
              type="text"
              name="inputImage"
              id="inputImage"
              data-testid="image-input"
            />
          </label>
        </div>

        <div className="formSelect">
          <label htmlFor="selectValue">
            Raridade:
            <select id="selectValue" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>

        <div className="formCheckbox">
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>
        </div>

        <div className="formSaveButton">
          <button type="button" value="Salvar" data-testid="save-button">
            Salvar
          </button>
        </div>
      </>
    );
  }
}

export default Form;
