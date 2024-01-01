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
          
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
