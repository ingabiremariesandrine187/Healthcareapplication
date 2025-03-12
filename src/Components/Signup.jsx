import React, { useState } from "react";
import "../style/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.email.includes("@")) {
      errors.email = "Enter a valid email address";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Signup successful! You can now log in.");
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
      setErrors({});
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>

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

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="login-link">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
