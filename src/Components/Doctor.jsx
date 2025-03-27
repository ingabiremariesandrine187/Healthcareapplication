import React from 'react'
import Image1 from '../assets/image.png'
import Image2 from '../assets/image2.jpg'
import Image4 from '../assets/image3.jpg'
import Image5 from '../assets/image4.jpg'
import Image6 from '../assets/image14.jpg'
import Image7 from '../assets/image16.png'
import Image8 from '../assets/images6.jpg'
import Image9 from '../assets/images7.jpg'
import Image10 from '../assets/images8.jpg'
import Image11 from '../assets/doctor3.jpg'
import Image12 from '../assets/doctor.jpg'
import Image13 from '../assets/Doctor2.webp'
import '../style/Doctor.css'
import { useNavigate } from "react-router-dom";
export const doctors = [
  {
    id: 1,
    image: Image1,
    name: 'Ophthalmologist',
    specialty: 'Ophthalmology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '12 years',
    description: 'Expert in eye care, treating vision problems, and performing surgeries.'
  },
  {
    id: 2,
    image: Image2,
    name: 'General Surgeon',
    specialty: 'General Surgery',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '20 years',
    description: 'Specialist in surgical procedures, including abdominal and emergency surgeries.'
  },
  {
    id: 3,
    image: Image4,
    name: 'Pediatrician',
    specialty: 'Pediatrics',
    rating: 5,
    time: 'Tue: 12:00PM - 4:00PM',
    fee: 100,
    experience: '15 years',
    description: 'Expert in child healthcare, treating infants, children, and adolescents.'
  },
  {
    id: 4,
    image: Image5,
    name: 'Cardiologist',
    specialty: 'Cardiology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '18 years',
    description: 'Specialist in heart and blood vessel conditions, offering expert cardiac care.'
  },
  {
    id: 5,
    image: Image6,
    name: 'Neurologist',
    specialty: 'Neurology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '22 years',
    description: 'Specializes in disorders of the nervous system, including the brain and spine.'
  },
  {
    id: 6,
    image: Image7,
    name: 'Dermatologist',
    specialty: 'Dermatology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '14 years',
    description: 'Treats skin, hair, and nail conditions, providing expert dermatological care.'
  },
  {
    id: 7,
    image: Image8,
    name: 'Anesthesiologist',
    specialty: 'Anesthesiology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '17 years',
    description: 'Expert in anesthesia and pain management, ensuring patient safety during surgery.'
  },
  {
    id: 8,
    image: Image9,
    name: 'Hematologist',
    specialty: 'Hematology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '16 years',
    description: 'Specialist in blood disorders, including anemia, leukemia, and clotting issues.'
  },
  {
    id: 9,
    image: Image10,
    name: 'Gastroenterologist',
    specialty: 'Gastroenterology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '19 years',
    description: 'Expert in digestive system disorders, including stomach, liver, and bowel diseases.'
  },
  {
    id: 10,
    image: Image11,
    name: 'Geriatrician',
    specialty: 'Geriatrics',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '21 years',
    description: 'Focuses on healthcare for the elderly, improving their quality of life.'
  },
  {
    id: 11,
    image: Image12,
    name: 'Urologist',
    specialty: 'Urology',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '18 years',
    description: 'Specialist in urinary tract and male reproductive health conditions.'
  },
  {
    id: 12,
    image: Image13,
    name: 'Psychotherapist',
    specialty: 'Psychotherapy',
    rating: 5,
    time: 'Tue: 2:00PM - 6:00PM',
    fee: 100,
    experience: '20 years',
    description: 'Provides therapy and counseling for mental health and emotional well-being.'
  }
];
const Doctor = () => {
    const navigate = useNavigate(); // Initialize navigation
  
    const handleDoctorProfile = (doctorId) => {
      navigate(`/single-doctor/${doctorId}`); // Navigate to SingleDoctorPage with doctor ID
    };
  
    return (
      <div className="doctor-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <button onClick={() => handleDoctorProfile(doctor.id)}>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Doctor;
  