import React from 'react';


const Product = ({ productData }) => {
  return (
    <div className="container mt-5">
      {productData ? (
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">{productData.title}</h1>
          </div>
          <div className="card-body">
            <p className="card-text">{productData.description}</p>
            <p className="card-text"><strong>Price: ${productData.price}</strong></p>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning" role="alert">
          Product not found
        </div>
      )}
    </div>
  );
};

export default Product;
