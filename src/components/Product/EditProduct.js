import React, { useState, useEffect } from 'react';
import './Products.css';

function EditProduct({ productId }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('newProduct'));
    if (storedProduct) {
      setProduct(storedProduct);
    }
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    localStorage.setItem('newProduct', JSON.stringify(product));
    alert('Product updated successfully');
  };

  return (
    <div className="product-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <input type="text" name="description" placeholder="Description" value={product.description || ''} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={product.category || ''} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price || ''} onChange={handleChange} required />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;