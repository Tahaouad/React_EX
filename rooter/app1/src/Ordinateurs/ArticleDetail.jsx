import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({ ordinateurs }) => {
  const  {id}  = useParams();
   
  const article = ordinateurs.find((pc) => pc.id == id);

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="container mt-3">
      <div className="card d-flex">
        <img
          src={require(`../${article.img}`)}
          className="card-img w-50"/>  
        <div className="card-body">
          <h5 className="card-title">{article.libelle}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
