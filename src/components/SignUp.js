import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        let error = '';
        if (name === 'name' && !/^[A-Za-z\s]+$/.test(value)) {
            error = 'Name must contain only alphabets and spaces.';
        }
        if (name === 'email' && !/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/.test(value)) {
            error = 'Email must be in the correct format (e.g., example@example.com).';
        }
        if (name === 'passwod' && !/^\d+$/.test(value)) {
            error = 'Password must contain special characters and numbers.';
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some(error => error !== '')) {
            return;
        }

        // Store the user's name in localStorage
        localStorage.setItem('userName', formData.name);

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="container">
            <div className="inner-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <button type="submit">Save</button>
                </form>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;