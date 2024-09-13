import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const isAuthenticated = true;

        if (isAuthenticated) {
            // Simulate retrieving the user's name (you would normally fetch this from your backend)
            const userName = localStorage.getItem('userName') || 'Guest';

            // Store the user authentication flag in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            
            // Navigate to the dashboard after login
            navigate('/dashboard');
        } else {
            console.log('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default Login;