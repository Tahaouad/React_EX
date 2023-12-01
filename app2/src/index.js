import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import dice0Image from './images/dice-0.png';
import dice1Image from './images/dice-1.png';
import dice2Image from './images/dice-2.png';
import dice3Image from './images/dice-3.png';
import dice4Image from './images/dice-4.png';
import dice5Image from './images/dice-5.png';
import dice6Image from './images/dice-6.png';

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === 6, 
    }));
  }

  getImage() {
    if (this.state.face !== null) {
      switch (this.state.face) {
        case 0:
          return dice0Image;
        case 1:
          return dice1Image;
        case 2:
          return dice2Image;
        case 3:
          return dice3Image;
        case 4:
          return dice4Image;
        case 5:
          return dice5Image;
        case 6:
          return dice6Image;
        default:
          return dice0Image;
      }
    }
    return dice0Image; 
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = { width: "60px", height: "60px" };

    return (
      <div>
        <img src="images/Dé.PNG" alt="Dé" />
        <h1>Jeu de Dé...</h1>
        <h2>Face : {this.state.face !== null ? this.state.face : "..."}</h2>
        <img src={this.getImage()} style={styleImage} alt="Face cachée" />
        <h2>Nombre d'essais : {this.state.compteur}</h2>
        {this.state.fin && (
          <p>Bravo, vous avez trouvé la face cachée!</p>
        )}
        <button onClick={() => this.jouer()}>Jouer</button>
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <JeuDe />
  </React.StrictMode>,
  root
);

reportWebVitals();
