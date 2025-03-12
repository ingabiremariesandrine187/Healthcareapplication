import React from "react";
import { useParams } from "react-router-dom";
import { doctors } from "./Home"; 
import { useNavigate } from "react-router-dom";
import "../style/SingleDoctorPage.css"; 

const SingleDoctorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div className="error-message">Doctor not found</div>;
  }

  return (
    <div className="single-doctor-container">
      {/* Background Section */}
      <div className="background-section" style={{ backgroundImage: `url(${doctor.image})` }}>
        <div className="overlay">
          <div className="content">
            <div className="icon">💙</div>
            <h1>Meet {doctor.name}</h1>
            <p>
              {doctor.name} is an experienced {doctor.specialty} dedicated to providing high-quality care.
            </p>
            <button className="appointment-button">Make Appointment</button>
            <p className="terms">T&C apply. Please read Terms and Conditions.</p>
          </div>
        </div>
      </div>

      {/* Doctor Profile Section */}
      <div className="doctor-profile-container">
        <div className="doctor-image">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div className="doctor-details">
          <h1>{doctor.name}</h1>
          <h3>Specialty: {doctor.specialty}</h3>
          <p>Rating: {doctor.rating} ⭐</p>
          <p>Time: {doctor.time}</p>
          <p>Consultation Fee: ${doctor.fee}</p>
          <p>Experience: {doctor.experience} years</p>
          <p>description: {doctor.description}</p>
          <button className="book-appointment" onClick={() => navigate(`/appointment/${id}`)}>
            Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctorPage;
