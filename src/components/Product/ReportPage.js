import React, { useState, useEffect } from 'react';
import './Products.css';

function ReportPage() {
  const newProducts = JSON.parse(localStorage.getItem('newProduct'));
  const [existingProductsCount, setExistingProductsCount] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setExistingProductsCount(data.total));
  }, []);

  return (
    <div className="report-page">
      <h2>Product Report</h2>
      <div className="card">
        <h3>New Products</h3>
        <p>{newProducts ? 1 : 0}</p>
      </div>
      <div className="card">
        <h3>Existing Products</h3>
        <p>{existingProductsCount}</p>
      </div>
    </div>
  );
}

export default ReportPage;