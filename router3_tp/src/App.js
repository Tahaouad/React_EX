import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsDetails from './components/ProductsDetails';
const products = [
  {
  id:1,
  image:'Tenu1.PNG',
  libelle :'Maillot Domicile Green',
  prix : '490.00 DH'
  },
  {
    id:2,
    image:'Tenu2.PNG',
    libelle :'Maillot Domicile White',
    prix : '490.00 DH'
  },
  {
    id:3,
    image:'Tenu3PNG.PNG',
    libelle :'Polo Raja club Black',
    prix : '300.00 DH'
  },
  {
    id:4,
    image:'Tenu4PNG.PNG',
    libelle :'Polo Raja club Green',
    prix : '300.00 DH'
  },
  {
    id:5,
    image:'Tenu5PNG.PNG',
    libelle :'Maillot Domicile Black',
    prix : '500.00 DH'
  },
  {
    id:6,
    image:'Pull1.PNG',
    libelle :'Pull white Raja club',
    prix : '299.00 DH'
  },
  
  {
    id:7,
    image:'Pull2PNG.PNG',
    libelle :'Pull Gray Raja club',
    prix : '299.00 DH'
  },
  {
    id:6,
    image:'Pull1.PNG',
    libelle :'Pull white Raja club',
    prix : '299.00 DH'
  }


]
function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' index element={<Products products={products}/>}/>
        <Route path='/ProductsDetails/:id'  element={<ProductsDetails products={products}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
