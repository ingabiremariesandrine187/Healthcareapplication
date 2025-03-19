import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { doctors } from "./Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../style/Appointment.css';

const Appointments = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  let navigate = useNavigate();
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
    status: "pending",
  });

  // Handle Form Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/appointments/createAppointment", formData);
      console.log(response,"responseresponseresponseresponse");
      if (response.status === 201) {
        toast.success("Appointment successfully booked!", { position: "top-right" });
        setFormData({
          fullName: "",
          email: "",
          appointmentDate: "",
          appointmentTime: "",
          message: "",
          status: "pending",
        });
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment. Please try again.", { position: "top-right" });
    }
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
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Select Date:
          <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
        </label>

        <label>
          Select Time:
          <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required />
        </label>

        <label>
          Additional Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>

        <button type="submit" className="submit-button">Submit Appointment</button>
      </form>

      {/* Toast Container to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default Appointments;
