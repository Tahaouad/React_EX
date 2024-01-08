import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    if (items && items.length > itemsPerPage) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
      }, 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [items, itemsPerPage]);

  if (!items || items.length === 0) {
    return <p>No products to display.</p>;
  }

  const displayItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="container mt-5">
      <h1 className='text-center text-success'>Top products</h1>
      <h6 className='text-center text-muted'>Latest trends from Raja</h6>
      <div className="row justify-content-center overflow-hidden">
        {displayItems.map((item) => (
          <div className="col-md-3 mb-4" key={item.id} >
            <div className="card" style={{height:'380px'}}>
              <Link to={`/ProductsDetails/${item.id}`}>
                <img src={require(`../images/${item.image}`)} alt={item.libelle} className="card-img-top"  />
              </Link>
              <div className="card-body">
                <h4 className="card-title">{item.libelle}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{item.prix}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
