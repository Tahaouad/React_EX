import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
  return (
    <div className="d-flex text-center flex-wrap">
      {props.products.map((produit) => (
        <Link to={`/ProduitDetails/${produit.id}`} key={produit.id}>
          <div className="card p-5 m-1 w-auto">
            <img
              className="m-auto"
              src={require(`../images/${produit.img}`)}
              alt={produit.libelle + " Image"}
              width={150}
              height={140}
            />
            <h3 className="card-title">{produit.libelle}</h3>

            <h4>{produit.prix}</h4>
          </div>
        </Link>
      ))}
      
    </div>
  );
};

export default Products;
