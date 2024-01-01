import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {

  return (
    <>
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
            </div>
          </div>
      ))}
    </div>
    </>
  );
};

export default Article;
