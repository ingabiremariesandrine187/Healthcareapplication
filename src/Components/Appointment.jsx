import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "./Home";
import '../style/Appointment.css'

const Appointments = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  // Handle Form Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment successfully booked!");
  };

  if (!doctor) {
    return <div className="error-message">Doctor not found</div>;
  }

  return (
    <div className="appointment-container">
      <h2>Book an Appointment with {doctor.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Select Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Select Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>
          Additional Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>

        <button type="submit" className="submit-button">Submit Appointment</button>
      </form>
    </div>
  );
};

export default Appointments;
