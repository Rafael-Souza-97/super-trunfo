import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// import Delete from './components/Delete';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayOfCards: [],
    };
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxAttrNumber = 90;
    const sumAttrNumber = 210;

    const numCardAttr1 = parseInt(cardAttr1, 10);
    const numCardAttr2 = parseInt(cardAttr2, 10);
    const numCardAttr3 = parseInt(cardAttr3, 10);

    const verifySum = numCardAttr1 + numCardAttr2 + numCardAttr3 <= sumAttrNumber;
    const verifyMaxAttr = numCardAttr1 <= maxAttrNumber
    && numCardAttr2 <= maxAttrNumber
    && numCardAttr3 <= maxAttrNumber;
    const verifyMinAttr = numCardAttr1 >= 0 && numCardAttr2 >= 0 && numCardAttr3 >= 0;
    const verified = verifySum && verifyMaxAttr && verifyMinAttr;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && verified) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.validateButton);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      arrayOfCards: [...prevState.arrayOfCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => {
      if (cardTrunfo) this.setState({ hasTrunfo: true });
    });
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
      arrayOfCards,
    } = this.state;

    return (
      <>
        <div className="formPreview">
          <div className="form">
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
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>

          <div className="preview">
            <h1>Pré Visualização</h1>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>

        <div className="cards">
          {
            arrayOfCards.map((cards) => (
              <Card
                className="cards"
                key={ cards.name }
                cardName={ cards.name }
                cardDescription={ cards.description }
                cardAttr1={ cards.attr1 }
                cardAttr2={ cards.attr2 }
                cardAttr3={ cards.attr3 }
                cardImage={ cards.image }
                cardRare={ cards.rare }
                cardTrunfo={ cards.trunfo }
              />
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
