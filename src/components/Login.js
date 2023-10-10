import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css'


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function
 

  const handleLogin = (e) => {
   
    e.preventDefault();

    // Simulate a successful login without API calls
    // You can add your authentication logic here
    const isAuthenticated = true; // Change this to true if authentication succeeds

    if (isAuthenticated) {
      // Store authentication data in localStorage
      localStorage.setItem('isAuthenticated', 'true');

      // Redirect to the /dashboard route
      navigate('/dashboard');
    } else {
      // Handle failed login (e.g., show an error message)
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
