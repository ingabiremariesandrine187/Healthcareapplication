import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Pharmacy.css";
import image50 from "../assets/Pharmacy1.jpg";
import image51 from "../assets/Pharmacy2.webp";
import image52 from "../assets/pharmacy3.jpg";
import image53 from "../assets/pharmacy5.webp";
import image54 from "../assets/pharmacy6.webp";
import image55 from "../assets/pharmacy1.jpg";
import image56 from "../assets/pharmacy9.jpg";
import image57 from "../assets/pharmacy10.jpg";
import image58 from "../assets/Pharmacy11.jpg";

const Pharmacy = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/pharmacy/${id}`);
  };

  const pharmacies = [
    { id: 1, name: "Victory Pharmacy", image: image50, openingHours: "Mon-Sat: 8:00 AM - 9:00 PM | Sun: 10:00 AM - 6:00 PM" },
    { id: 2, name: "Medheal Pharmacy", image: image51, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 3, name: "Wellness Pharmacy", image: image52, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 4, name: "CarePoint Pharmacy", image: image53, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 5, name: "LifeCare Pharmacy", image: image54, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 6, name: "Guardian Pharmacy", image: image55, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 7, name: "GreenLeaf Pharmacy", image: image56, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 8, name: "MediTrust Pharmacy", image: image57, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
    { id: 9, name: "Vital Health Pharmacy", image: image58, openingHours: "Mon-Sat: 9:00 AM - 5:00 PM | Sun: 2:00 AM - 6:20 PM" },
  ];

  return (
    <div className="pharmacy-container">
      <h2 className="pharmacy-title">Pharmacy</h2>
      <div className="pharmacy-grid">
        {pharmacies.map((pharmacy) => (
          <div key={pharmacy.id} className="pharmacy-item">
            <img src={pharmacy.image} alt={pharmacy.name} />
            <p className="pharmacy-name">{pharmacy.name}</p>
            <p className="pharmacy-hours">{pharmacy.openingHours}</p>
            <button className="btn pharmacy-button" onClick={() => handleViewDetails(pharmacy.id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharmacy;
