import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validateButton = (() => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttrNumber = 90;
    const sumAttrNumber = 210;

    const numCardAttr1 = parseInt(cardAttr1, 10);
    const numCardAttr2 = parseInt(cardAttr2, 10);
    const numCardAttr3 = parseInt(cardAttr3, 10);

    const verfifySum = numCardAttr1 + numCardAttr2 + numCardAttr3 <= sumAttrNumber;
    const verifyMaxAttr = numCardAttr1 <= maxAttrNumber
    && numCardAttr2 <= maxAttrNumber
    && numCardAttr3 <= maxAttrNumber;
    const verifyMinAttr = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;
    const verifyed = verfifySum && verifyMaxAttr && verifyMinAttr;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && verifyed) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  });

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.validateButton);
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />

        <Card
          data-testid="name-card"
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
