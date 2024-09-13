import React, { useEffect, useState } from 'react';
import './Products.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;