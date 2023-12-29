import React from 'react';
import Article from './Ordinateurs/Article';

const ordinateurs = [
  {
    titre: 'Pc 1',
    prix: 3000.00,
  },
  {
    titre: 'Pc 2',
    prix: 5000.00,
  },
  {
    titre: 'Pc 3',
    prix: 7000.00,
  },
  {
    titre: 'Pc 4',
    prix: 7000.00,
  }
];

function App() {
  return (
    <div className="App">
      <Article ordinateurs={ordinateurs} />
    </div>
  );
}

export default App;
