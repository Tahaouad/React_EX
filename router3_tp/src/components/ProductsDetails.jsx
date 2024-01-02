import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const add = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  const productNow = products.find((produit) => produit.id == id);
  if (!productNow) {
    return <div>Product not available</div>;
  }
  const { image, libelle, prix } = productNow;

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={require(`../images/${image}`)}
              alt={libelle}
              className="img-fluid"
              width={600}
            />
          </div>
          <div className="col-md-6">
            <h2>{libelle}</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit tenetur eius deserunt aliquid non in explicabo,
              asperiores aut repellendus dolorem velit nisi, nesciunt vero
              temporibus est? Ea, laboriosam autem! Quibusdam?
            </p>
            <p>{prix}</p>
            <div className="d-flex align-items-center mb-3">
              <button className="btn btn-outline-success me-2">-</button>
              <span className="me-2">1</span>
              <button className="btn btn-outline-success">+</button>
            </div>
            <button className="btn btn-success" onClick={add}>
              Add to Cart
            </button>

            {showAlert && (
              <div className="alert alert-success mt-3" role="alert">
                Produit a bien ajouté au panier!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
