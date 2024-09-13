import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Retrieve the user's name from localStorage
        const storedUserName = localStorage.getItem('userName') || 'User';
        setUserName(storedUserName);
    }, []);

    return (
        <div className="dashboard">
            <h1>Welcome, {userName}!</h1>
            <p>Navigate through the menu to manage products.</p>

            <nav className="dashboard-menu">
                <ul>
                    <li><Link to="/add-product">Add Product</Link></li>
                    <li><Link to="/edit-product/1">Edit Product</Link></li>
                    <li><Link to="/view-product/1">View Product</Link></li>
                    <li><Link to="/product-list">Product List</Link></li>
                    <li><Link to="/report-page">Product Report</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;