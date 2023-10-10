import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css'

function Signup() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      gender: '', // Add gender field
      hearAbout: [], // Add hearAbout field as an array
      city: 'Mumbai', // Default city value
      state: 'Maharashtra', // Default state value
    });
  
    const [errors, setErrors] = useState({}); // State to track validation errors
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
  
      // Validation logic
      let error = '';
      if (name === 'name' && !/^[A-Za-z\s]+$/.test(value)) {
        error = 'Name must contain only alphabets and spaces.';
      }
      if (name === 'email' && !/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/.test(value)) {
        error = 'Email must be in the correct format (e.g., example@example.com).';
      }
      if (name === 'phone' && !/^\d+$/.test(value)) {
        error = 'Phone must contain only numbers.';
      }
  
      // Update errors state
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  
      // Update form data
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check for any validation errors
      if (Object.values(errors).some(error => error !== '')) {
        return;
      }
  
      // Simulate registration success (replace with your actual registration logic)
      // Redirect to login page after a delay
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect after 2 seconds (adjust the delay as needed)
    };
  
    return (
        
      <div className="container"> {/* Add a container div */}
        <div className="inner-container"> {/* Add an inner container div */}
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="error">{errors.name}</p>} {/* Display name validation error */}
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>} {/* Display email validation error */}
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            {errors.phone && <p className="error">{errors.phone}</p>} 
            <div className='input-group'>
            <div className="gender">
              <p>Gender:</p>
              <label>
                Male
                <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
              </label>
              <label>
                Female
                <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
              </label>
              <label>
                Others
                <input type="radio" name="gender" value="Others" checked={formData.gender === 'Others'} onChange={handleChange} />
              </label>
            </div>
            <div className="hear-about">
              <p className='bta'>How did you hear about this ?</p>
              <label>
                LinkedIn
                <input type="checkbox" name="hearAbout" value="LinkedIn" checked={formData.hearAbout.includes('LinkedIn')} onChange={handleChange} />
              </label>
              <label>
                Friends
                <input type="checkbox" name="hearAbout" value="Friends" checked={formData.hearAbout.includes('Friends')} onChange={handleChange} />
              </label>
              <label>
                Job Portal
                <input type="checkbox" name="hearAbout" value="Job Portal" checked={formData.hearAbout.includes('Job Portal')} onChange={handleChange} />
              </label>
              <label>
                Others
                <input type="checkbox" name="hearAbout" value="Others" checked={formData.hearAbout.includes('Others')} onChange={handleChange} />
              </label>
            </div>
            <div className="city">
              <p>City:</p>
              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>
            <div className="state">
                <p>State:</p>
            <select name="state" value={formData.state} onChange={handleChange}>
                
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>
            </div>
            <button type="submit">Save</button>
          </form>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </div>
    );
  }
  
  export default Signup;