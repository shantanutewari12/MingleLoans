import React, { useState } from 'react';
import './Products.css';

function AddProduct() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    brand: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    localStorage.setItem('newProduct', JSON.stringify(product));
    alert('Product added successfully');
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
        <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
