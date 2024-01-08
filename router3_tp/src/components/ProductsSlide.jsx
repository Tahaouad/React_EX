import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [items]);

  const displayItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <h1 className='m-auto fw-bold text-center text-success'>Top products</h1>
      <h6 className='m-auto text-center fw-lighter'>Les dernières tendances du Raja</h6>
      <div className="d-flex w-100 overflow-hidden">
        <div className="d-flex transition" style={{ transform: `translateX(${-currentIndex * 50}px)` }}>
          {displayItems.map((item, index) => (
            <div className="card p-1 m-2" style={{ width: '360px' }} key={item.id}>
              <Link to={`/ProductsDetails/${item.id}`}>
                <img src={require(`../images/${item.image}`)} alt="test" />
              </Link>
              <h4 className="card-title">{item.libelle}</h4>
              <h6>{item.prix}</h6>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default ProductSlider;
