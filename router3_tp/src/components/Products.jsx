import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ProductSlider from './ProductsSlide';
import Decouvrir from './Decouvrir';
import Footer from './Footer';

const Products = ({ products }) => {
  const duplicatedProducts = [...products, ...products];

  return (
    <div className='container-fluid'>
      <Navbar />
      <ImageSlider images={['slide-a-1.png', 'slide-3-1.png', 'slide-b-1.png']} />
      <ProductSlider items={duplicatedProducts} />

      <img src={require('../images/cover.PNG')} alt="" className="img-fluid" />

      {/* Product Section */}
      <div className="container mt-5">
        <h1 className='text-center text-success fw-bold'>EXPLORATION EXCLUSIVE</h1>
        <h6 className='text-center text-muted fw-lighter'>Latest trends from Raja</h6>
        <div className="row justify-content-center mt-2">
          {products.map((product) => (
            <div className="col-md-3 col-sm-6 col-12 mb-3" key={product.id}>
              <div className="card p-2" style={{ height: '100%' }}>
                <Link to={`/ProductsDetails/${product.id}/#top`} onClick={(e) => e.stopPropagation()}>
                  <img
                    src={require(`../images/${product.image}`)}
                    alt={product.libelle}
                    className="card-img-top img-fluid"
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{product.libelle}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{product.prix}</h6>
                  <button className="btn btn-success mt-auto">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Decouvrir />
      <Footer />
    </div>
  );
};

export default Products;
