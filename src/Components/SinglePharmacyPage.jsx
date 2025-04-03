import React from 'react'
import image50 from "../assets/Pharmacy1.jpg";
import image51 from "../assets/Pharmacy2.webp";
import image52 from "../assets/pharmacy3.jpg";
import image53 from "../assets/pharmacy5.webp";
import image54 from "../assets/pharmacy6.webp";
import image55 from "../assets/pharmacy1.jpg";
import image56 from "../assets/pharmacy9.jpg";
import image57 from "../assets/pharmacy10.jpg";
import image58 from "../assets/Pharmacy11.jpg";
import { useParams } from 'react-router-dom';
import '../style/Singlepharmacy.css'

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

const SinglePharmacyPage = () => {
  const { id } = useParams(); // Get the pharmacy ID from the URL
  const pharmacy = pharmacies.find(ph => ph.id === parseInt(id)); // Find the pharmacy by ID

  if (!pharmacy) {
    return <h2>Pharmacy Not Found</h2>;
  }

  return (
    <div className="pharmacy-details">
      <img src={pharmacy.image} alt={pharmacy.name} />
      <h2>{pharmacy.name}</h2>
      <p><strong>Opening Hours:</strong> {pharmacy.openingHours}</p>
      {/* Add more details as necessary */}
    </div>
  )
}
export default SinglePharmacyPage;