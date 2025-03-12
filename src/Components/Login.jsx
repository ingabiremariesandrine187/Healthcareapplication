import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); 

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};

    if (!formData.email.includes("@")) {
      errors.email = "Enter a valid email address";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Login successful! Redirecting...");
      setErrors({});
      
     
      setTimeout(() => {
        navigate("/Home"); 
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;
