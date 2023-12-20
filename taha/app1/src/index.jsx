import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const List = [
//   { nom: 'TAHA', prenom: 'Ouad', src: "/logo512.png" },
//   { nom: 'Hamza', prenom: 'Ouad', src: "/logo512.png" },
//   { nom: 'Yousef', prenom: 'Douyry', src: "/logo512.png" },
//   { nom: 'Ahmad', prenom: 'Douyry', src: "/logo512.png" }
// ];


// root.render(
//   <ul style={{ fontSize: '25px' ,listStyle : 'none'}}>
//     {List.map((el, index) => (
//       <li key={index}>
//         <img src={el.src} alt='Image not found' style={{ width: '50px', height: '50px' }}/>
//         <p>{el.nom}</p>
//       </li>
//     ))}y
//   </ul>
// );

const NavBar = () => {
  return (
    <nav id='nav' style={{ backgroundColor: 'black', padding: '10px', textAlign: 'center', position: 'sticky', top: 0 ,height :"30px"}}>
      <a href="#" style={{ position:'absolute',left:"20px" ,color: 'white', margin: '0 10px', textDecoration: 'none',fontWeight:'bold'}}>OrdiShop</a>
        <div style={{textAlign:"right"}}>
        <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Accueil</a>
        <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Produits</a>
        <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</a>
        </div>
    </nav>
  );
}

const Products = [
  {
    id : 1,
    nom: ' Pro MacBook Air M2',
    prix: '11200.99',
    source: '/pc1.png',
  },
  {
    id : 2,
    nom: 'Ordinateur  MacBook',
    prix: '29000.99',
    source: '/pc2.png',
  },
  {
    id : 3,
    nom: 'Gaming Laptop GL503',
    prix: '39000.99',
    source: '/pc3.png',
  },
  {
    id : 4,
    nom: 'Pro MacBook Air M1',
    prix: '5009.99',
    source: '/pc1.png',
  },
  {
    id : 5,
    nom: 'Mac book lapt M3',
    prix: '50009.99',
    source: '/pc1.png',
  },
  {
    id : 6,
    nom: ' Pro MacBook Air M2',
    prix: '11200.99',
    source: '/pc1.png',
  },
  {
    id : 7,
    nom: 'Gaming Laptop GL503',
    prix: '39000.99',
    source: '/pc4.png',
  },
  {
    id : 8,
    nom: 'Ordinateur  MacBook',
    prix: '29000.99',
    source: '/pc2.png',
  },
  {
    id : 9,
    nom: 'Gaming Laptop GL503',
    prix: '39000.99',
    source: '/pc3.png',
  },
  {
    id : 5,
    nom: 'Mac book lapt M3',
    prix: '50009.99',
    source: '/pc1.png',
  }
];
/*API*/
const Product = (props) => {
  return (
    <div className='container' >
      {props.products.map((produit) => (
        <div key={produit.id} className='product' >
          <img className='image_container' src={require(`../src${produit.source}`)} alt="Image Ordinateur" />
          <h4>{produit.nom}</h4>
          <h5>{produit.prix} Dhs</h5>
          <button className='add_panier_button'>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
}

const Sign = () => {
  return (
    <div id='sign' style={{ backgroundColor: 'black',color:'white', textAlign: 'center', position: 'sticky',button :0 ,height :"auto",marginBottom:'-30px'}}>
      <h1>1 ere exemple React 20/11/2023</h1>
    </div>
  );
}

root.render(
  <>
    <NavBar />
  <Product products={Products} />
    <Sign />
    <button className='retour_button'><a href="nav">^</a></button>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
