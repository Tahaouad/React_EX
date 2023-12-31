import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
  const [panier,setPanier] = useState([])
  const ajouter=(id)=>{
    
    const artic = props.ordinateurs.find(e=>e.id==id)
    setPanier([...panier,artic.libelle])
  }
  return (
    <>
    <h1>produit en panier :{panier.length}</h1>
    <div className="container d-flex flex-wrap justify-content-center">
      {props.ordinateurs.map((pc, index) => (
          <div className="card m-2 p-3" style={{ width: '18rem', height: 'auto' }}>
        <Link key={index} to={`/article/${pc.id}`} className="text-decoration-none text-dark">
            <img
              src={require(`../${pc.img}`)}
              alt={pc.libelle+' '+'Image'}
              className="card-img-top"
              width={100}
              height={200}
            />
        </Link>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{pc.libelle}</h5>
              <p className="card-text">{pc.prix}</p>
              <button className="btn btn-primary mt-auto" onClick={()=>ajouter(pc.id)}>Ajouter au panier</button>
            </div>
          </div>
      ))}
    </div>
    {panier.join(' / ')}
    </>
  );
};

export default Article;
