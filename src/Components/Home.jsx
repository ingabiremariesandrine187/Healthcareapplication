import React from 'react';
import Image3 from '../assets/image copy.png';
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
import { FaUserMd, FaClinicMedical, FaVial, FaAmbulance, FaShieldAlt } from "react-icons/fa";
import BackgroundImage from "../assets/backgroundimage.jpg";  
import image14 from '../assets/avatar doctor.svg'
import { FaPhoneAlt } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import '../style/Home.css'
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

const services = [
  { icon: <FaUserMd />, title: "Doctors" },
  { icon: <FaClinicMedical />, title: "Clinics" },
  { icon: <FaVial />, title: "Labs" },
  { icon: <FaAmbulance />, title: "Emergency" },
  { icon: <FaShieldAlt />, title: "Insurance" },
];



const Home = () =>{
  const navigate = useNavigate();
  const handleDoctorProfile = (id) => {
    navigate(`/doctor/${id}`);
  };
  



  return (
    <div className="home-container">
      {/* Left Side - Text Content */}
      <div className="home-content">
        <div className="home-title">
          <h1>Select Top Specialists</h1>
          <div class="home-description">When your family needs prompt attention, expert treatment
            , or a reliable consultation, our doctors are here to help,
            We understand the importance of quality healthcare and are committed to providing personalized care tailored to your needs.
             Whether it's a routine check-up or an emergency, our team is dedicated to ensuring your well-being. 
            Trust us to offer compassionate and efficient medical services that you and your family deserve
            
            
  
            </div>
        </div>

        {/* Right Side - Image */}
        <div className="doctor-image">
          <img src={Image3} alt="Doctor" className="img3" />
        </div>
      </div>
      <button class="find-doctors" onClick={() => navigate("/doctor")}>Find Doctors</button>
     <div class="title">
      <h2>Find your specialist</h2>
     </div>
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
<div class="title">
      <h2>Explore by Categories</h2>
     </div>
     <div class="home-description">When your family needs prompt attention, expert treatment
     , or a reliable consultation, our doctors are here to help</div>

{/* <div class="categories">
<div class="doctors">Doctors</div>
<div class="clinics">Clinics</div>
<div class="labs">Labs</div>
<div class="emergency">Emergency</div>
<div class="labs">Labs</div>
<div class="insurance">Insurance</div>
</div> */}

<div className="service-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="icon-wrapper">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>Due to its wide spread use as filler text</p>
          <a href="#">Find here →</a>
        </div>
      ))}
    </div>
    
    <div class="About-title"><h2>Good Services And Better
    Health By Our Specialists</h2></div>
    <div class="about-description">
    Great specialists ensure that you and your loved ones receive prompt, 
    high-quality medical care—<br/>whether it’s for urgent emergencies, routine checkups,
     or expert consultations.
      Our team is dedicated to providing<br/> personalized treatment with advanced medical solutions,
       ensuring the best possible health outcomes.<br/> 
       With a focus on patient well-being, we combine experience, compassion,
     and innovation to deliver healthcare you can trust.
    </div>
   
    <div className="about-section">
        <div className="about-overlay">
          <div className="about-box">
            <h3>Our Mission</h3>
            <p>Our mission is to bridge the gap between patients and 
              healthcare professionals by offering a reliable,
               user-friendly system for booking medical appointments. We strive to enhance efficiency, 
              reduce waiting times, and promote better patient-doctor interactions</p>
          </div>
          <div className="about-box">
            <h3>Our Vision</h3>
            <p>
            To revolutionize healthcare accessibility by providing a seamless, 
            efficient, 
            and patient-centered digital platform where individuals
             can connect with top specialists
            , ensuring timely medical care and improved health outcomes.
            </p>
          </div>
          <div className="about-box">
            <h3>Who We Are?</h3>
            <p>
            We are a dedicated team committed to transforming healthcare accessibility. 
            Our platform empowers patients to find specialists,
             schedule consultations with ease, 
            and receive timely medical attention. By leveraging technology, 
            we aim to improve healthcare delivery and patient satisfaction
            </p>
          </div>
        </div>
      </div>
      <div class="other-description">
     <div> <img src={image14} alt="Doctor" class="image14"/></div>
      {/* <div class="avatar-description">"Your health, our priority.
Expert care with a compassionate touch.
Here for you, every step of the way</div> */}


        </div>
    </div>
  );
}

export default Home;
