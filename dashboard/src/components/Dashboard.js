import React, { useState } from 'react';
import NavBar from './NavBar';


const Dashboard = () => {
    const Products = [
        {
          id : 1,
          nom: ' Pro MacBook Air M2',
          prix: '11200.99',
          source: 'pc1.png',
        },
        {
          id : 2,
          nom: 'Ordinateur  MacBook',
          prix: '29000.99',
          source: 'pc2.png',
        },
        {
          id : 3,
          nom: 'Gaming Laptop GL503',
          prix: '39000.99',
          source: 'pc3.png',
        },
        {
          id : 4,
          nom: 'Pro MacBook Air M1',
          prix: '5009.99',
          source: 'pc1.png',
        },
        {
          id : 5,
          nom: 'Mac book lapt M3',
          prix: '50009.99',
          source: 'pc1.png',
        },
        {
          id : 6,
          nom: ' Pro MacBook Air M2',
          prix: '11200.99',
          source: 'pc1.png',
        },
        {
          id : 7,
          nom: 'Gaming Laptop GL503',
          prix: '39000.99',
          source: 'pc4.png',
        },
        {
          id : 8,
          nom: 'Ordinateur  MacBook',
          prix: '29000.99',
          source: 'pc2.png',
        },
        {
          id : 9,
          nom: 'Gaming Laptop GL503',
          prix: '39000.99',
          source: 'pc3.png',
        },
        {
          id : 5,
          nom: 'Mac book lapt M3',
          prix: '50009.99',
          source: 'pc1.png',
        }
      ];
     
      const Product = (props) => {
        const containerStyle = {
          marginLeft: props.showNavBar ? '250px' : '50px',
          transition: 'margin 0.3s ease',
        };
      
        return (
          <div className='container' style={containerStyle}>
            {props.products.map((produit) => (
              <div key={produit.id} className='product'>
                <img className='image_container' src={require(`../${produit.source}`)} alt="Image Ordinateur" />
                <h4>{produit.nom}</h4>
                <h5>{produit.prix} Dhs</h5>
                <button className='add_panier_button'>Ajouter au panier</button>
              </div>
            ))}
          </div>
        );
      };
  

  const [showNavBar, setShowNavBar] = useState(true);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const mainContentStyle = {
    marginLeft: showNavBar ? '220px' : '40px',
    transition: ' 0.9s ease',
    color: 'white',
    backgroundColor:'#333',
    padding: '50px',
  };

  return (
    <div>
      <NavBar showNavBar={showNavBar} toggleNavBar={toggleNavBar} />
      <div className="main-content" style={mainContentStyle}>
        <h1>Our Products</h1>
      </div>
      <Product products={Products} showNavBar={showNavBar} />
    </div>
  );
};

export default Dashboard;