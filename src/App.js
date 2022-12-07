import React from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import Delete from './components/Delete';
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
      filtSearch: [],
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

  deleteButton = (cardName) => {
    const { arrayOfCards, cardTrunfo } = this.state;
    const filt = arrayOfCards.filter((element) => element.name !== cardName);
    if (cardTrunfo === false) {
      this.setState({
        hasTrunfo: false,
        arrayOfCards: filt,
        filtSearch: filt,
      });
    }
    this.setState({
      arrayOfCards: filt,
    });
  }

  filterSearch = ({ target }) => {
    const { arrayOfCards } = this.state;
    const cardFilter = arrayOfCards
      .filter((item) => item.name.includes(target.value));
    this.setState({ filtSearch: cardFilter });
    if (!target.value) this.setState({ filtSearch: [] });
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
      filtSearch,
    } = this.state;

    return (
      <>
        <div className="formPreview">
          <div className="form">
            <h1>Super Trunfo</h1>
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

        <div>
          <h4> Filtro de Busca</h4>
          <Filter
            filterSearch={ this.filterSearch }
          />
          {
            !filtSearch.length ? '' : filtSearch.map((cards) => (
              <div
                className="cardSpace"
                key={ nanoid() }
              >
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
                  onDeleteButtonClick={ this.onDeleteButtonClick }
                />
                <Delete
                  deleteButton={ this.deleteButton }
                  cardName={ cards.name }
                />
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

export default App;

// https://hips.hearstapps.com/hmg-prod/images/2021-bmw-m5-competition-1146-1625696565.jpg?crop=0.547xw:0.461xh;0.164xw,0.490xh&resize=2048:*
// https://images3.alphacoders.com/883/883776.jpg
// https://wallpaperaccess.com/full/5627543.jpg