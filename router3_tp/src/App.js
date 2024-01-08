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
    image:'Tenu3.PNG',
    libelle :'Polo Raja club athletic Black',
    prix : '300.00 DH'
  },
  {
    id:4,
    image:'Tenu4.PNG',
    libelle :'Polo Raja club Green',
    prix : '300.00 DH'
  },
  {
    id:5,
    image:'Tenu5.PNG',
    libelle :'Maillot Domicile Black',
    prix : '500.00 DH'
  },
  {
    id:6,
    image:'Tenu6.png',
    libelle :'Maillot Entrain Green',
    prix : '500.00 DH'
  },
  {
    id:7,
    image:'Tenu7.png',
    libelle :'Maillot Entrain Green ',
    prix : '500.00 DH'
  },
  {
    id:8,
    image:'sac.png',
    libelle :'Sac de Voyage Keepall en Cuir ',
    prix : '1490.00 DH'
  },
  {
    id:9,
    image:'sac2.png',
    libelle :'Sac a deau Keepall en Cuir ',
    prix : '1490.00 DH'
  },
  {
    id:10,
    image:'sac3.png',
    libelle :'Sac a deau Keepall en Cuir ',
    prix : '1290.00 DH'
  },
  {
    id:11,
    image:'lunet1.jpg',
    libelle :'Lunettes "EagleGaze',
    prix : '319.00 DH'
  },
  
  {
    id:12,
    image:'lunet2.png',
    libelle :'Lunettes "SylvanSoar" ',
    prix : '390.00 DH'
  },
  
  
  {
    id:13,
    image:'cas1.png',
    libelle :'Lunettes "SylvanSoar" ',
    prix : '99.00 DH'
  },
    
  {
    id:6,
    image:'Pull1.PNG',
    libelle :'Pull white Raja club',
    prix : '299.00 DH'
  },
  
  
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
