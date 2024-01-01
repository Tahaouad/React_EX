import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import ProduitDetails from './components/ProduitDetails';

const liste_produits = [
  { id: 1, libelle: "Ordinateur portable", prix: 999.99, description: "Puissant portable pour une utilisation professionnelle.", img: 'Ordinateurportable.png' },
  { id: 2, libelle: "Caméra de sécurité", prix: 149.99, description: "Caméra de surveillance pour protéger votre domicile.", img: 'Caméradesécurité.png' },
  { id: 3, libelle: "Casque sans fil", prix: 129.99, description: "Casque audio de haute qualité avec technologie sans fil.", img: 'Casquesansfil.png' },
  { id: 4, libelle: "Caméra de sécurité Q4", prix: 349.99, description: "Caméra de surveillance pour protéger votre domicile.", img: 'Caméradesécurité.png' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Products products={liste_produits} />} />
        <Route path="/ProduitDetails/:id" element={<ProduitDetails products={liste_produits} />} />
      </Routes>
    </Router>
  );
}

export default App;
