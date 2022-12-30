import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    lista: [],
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  isSaveButtonDisabled = () => {
    // desmembrar dentro da função
    const { cardAttr1, cardAttr2, cardAttr3, cardName,
      cardDescription, cardImage, cardRare } = this.state;

    // a soma dos tres atributos não pode ultrapassar 210
    const valorMaximo = 210;
    const valorMaxporAtributo = 90;
    const atributoMin = 0;

    const pontos = [+(cardAttr1), +(cardAttr2), +(cardAttr3)];
    const someF = pontos.some((atributo) => atributo < atributoMin);
    // console.log(someF); true
    const someAny = pontos.some((atributo) => atributo > valorMaxporAtributo);
    // console.log(someAny); true
    const pontosReduce = (pontos.reduce((acc, cur) => acc + cur)) > valorMaximo;
    // console.log(pontosReduce); aqui é a soma com a condicao
    // habilitar o botão quando os inputs !== vazio

    const tamanho = (
      !cardName.length > 0
      || !cardDescription.length > 0
      || !cardImage.length > 0
      || !cardRare.length > 0
    );
    if (someF || someAny || pontosReduce || tamanho) {
      return true;
    } return false;
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState((est) => ({
      lista: [...est.lista, {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  }

  hasTrunfoFunction = () => {
    const { lista } = this.state;
    return lista.some(({ cardTrunfo }) => cardTrunfo);
  };

  removeCard(key) {
    const { lista } = this.state;
    this.setState(
      {
        lista: lista.filter((card, item) => item !== key),
      },
      () => {
        this.hasTrunfo();
      },
    );
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
      lista,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ this.hasTrunfoFunction() }
        />

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

        { lista.map((props, index) => (
          <div key={ index }>
            <Card
              cardName={ props.cardName }
              cardDescription={ props.cardDescription }
              cardAttr1={ props.cardAttr1 }
              cardAttr2={ props.cardAttr2 }
              cardAttr3={ props.cardAttr3 }
              cardImage={ props.cardImage }
              cardRare={ props.cardRare }
              cardTrunfo={ props.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => {
                this.removeCard(index);
              } }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
// Ajuda Guilherme Aquino
// Ajuda Lucas Ximenes sala zoom 04;
// ajuda Miguel Angelo = Sala B exercicio 05, glória a Deus! kkkkk linhas 34 a 40;
// ajuda MIguel ANgelo spread vamos pegar somente os objetos ;
// e o inicializador não vai ter por onde começar;
