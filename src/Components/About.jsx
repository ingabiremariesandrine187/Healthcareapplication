import React from "react";
import '../style/About.css'
// import aboutImage from "../assets/aboutus.jpg"; // Add an appropriate image to assets

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>Empowering Healthcare Through Technology</h2>
          <p>
            Welcome to our Doctor-Patient Appointment Booking System, a platform 
            designed to simplify healthcare access. We bridge the gap between patients 
            and specialist doctors by providing a seamless online booking experience.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our goal is to make healthcare more accessible, efficient, and patient-friendly. 
            We believe that every individual deserves quick and easy access to quality medical care, 
            and our platform ensures that finding the right doctor is just a few clicks away.
          </p>

          <h3>What We Offer</h3>
          <ul>
            <li><strong>Effortless Appointment Booking:</strong> Schedule your consultation with top specialists from the comfort of your home.</li>
            <li><strong>Wide Range of Specialists:</strong> Find the best care tailored to your needs.</li>
            <li><strong>Secure & Reliable Platform:</strong> Your health information is safe with us.</li>
            <li><strong>Online & In-Person Consultations:</strong> Choose between telehealth or in-clinic visits.</li>
          </ul>

          <h3>Why Choose Us?</h3>
          <div className="benefits">
            <div className="benefit-item">✅ Convenience: Book, reschedule, or cancel appointments anytime.</div>
            <div className="benefit-item">✅ Verified Specialists: We connect you only with trusted and qualified doctors.</div>
            <div className="benefit-item">✅ User-Friendly Interface: A simple and intuitive design.</div>
            <div className="benefit-item">✅ 24/7 Availability: Get healthcare support whenever you need it.</div>
          </div>

          <h3>Join Us in Revolutionizing Healthcare</h3>
          <p>
            We are committed to improving the way patients interact with doctors. 
            Whether you need a quick consultation or a detailed medical assessment, 
            our platform is designed to offer you the best possible healthcare experience.
          </p>

          <button className="start-btn">Start Booking Your Appointment</button>
        </div>

        {/* <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
