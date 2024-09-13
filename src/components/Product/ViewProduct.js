import React from 'react';
import './Products.css';

function ViewProduct({ productId }) {
  const product = JSON.parse(localStorage.getItem('newProduct'));

  return (
    <div className="product-view">
      <h2>Product Details</h2>
      {product && (
        <div>
          <p><strong>Title:</strong> {product.title}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
        </div>
      )}
    </div>
  );
}

export default ViewProduct;