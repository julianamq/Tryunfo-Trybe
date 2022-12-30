import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div>
        <div>
          Name:
          <h3 data-testid="name-card">{cardName}</h3>
        </div>
        <div>
          <span data-testid="description-card">{cardDescription}</span>
        </div>
        <div>
          cardAttr1:
          <span data-testid="attr1-card">{cardAttr1}</span>
        </div>
        <div>
          cardAttr2:
          <span data-testid="attr2-card">{cardAttr2}</span>
        </div>
        <div>
          cardAttr3:
          <span data-testid="attr3-card">{cardAttr3}</span>
        </div>
        <div>
          Imagem
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div>
          CardRare
          <span data-testid="rare-card">{cardRare}</span>
        </div>
        {cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div>}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
