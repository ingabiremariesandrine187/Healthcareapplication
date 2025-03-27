import React from "react";
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
  // Pharmacy data array (Use actual imported variables, NOT strings)
  const pharmacies = [
    { name: "Victory Pharmacy", image: image50 },
    { name: "Medheal Pharmacy", image: image51 },
    { name: "Wellness Pharmacy", image: image52 },
    { name: "CarePoint Pharmacy", image: image53 },
    { name: "LifeCare Pharmacy", image: image54 },
    { name: "Guardian Pharmacy", image: image55 },
    { name: "GreenLeaf Pharmacy", image: image56 },
    { name: "MediTrust Pharmacy", image: image57 },
    { name: "Vital Health Pharmacy", image: image58 },
  ];

  return (
    <div className="pharmacy-container">
      <h2 className="pharmacy-title">Pharmacy</h2>
      <div className="pharmacy-grid">
        {pharmacies.map((pharmacy, index) => (
          <div key={index} className="pharmacy-item">
            <img src={pharmacy.image} alt={pharmacy.name} />
            <p className="pharmacy-name">{pharmacy.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharmacy;
