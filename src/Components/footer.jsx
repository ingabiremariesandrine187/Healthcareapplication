
import React from "react";
 import { Link } from "react-router-dom"; 
 import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
  import image4 from '../assets/Healthcare picture.jpg'
 import '../style/footer.css'
 const Footer = () => {
   return (
     <footer className="footer">
       <div className="footer-content">
         {/* Logo and Description */}
         <div className="footer-logo">
           <div><img src={image4} alt='Image4' class="Image4" ></img></div> 
           <p>
             Great doctor if you need your family member to get effective
             immediate assistance, emergency treatment, or a simple consultation.
           </p>
         </div>

         {/* Company Links */}
         <div className="footer-column">
           <h3>Company</h3>
           <Link to="/about">About us</Link>
           <Link to="/services">Services</Link>
           <Link to="/team">Team</Link>
           <Link to="/projects">Project</Link>
           <Link to="/blog">Blog</Link>
           <Link to="/login">Login</Link>
         </div>

         {/* Departments */}
         <div className="footer-column">
           <h3>Departments</h3>
           <Link to="/departments/eye-care">Eye Care</Link>
           <Link to="/departments/psychotherapy">Psychotherapy</Link>
        <Link to="/departments/dental-care">Dental Care</Link>
        <Link to="/departments/orthopedic">Orthopedic</Link>
        <Link to="/departments/cardiology">Cardiology</Link>
        <Link to="/departments/gynecology">Gynecology</Link>
        <Link to="/departments/neurology">Neurology</Link>
      </div>

        {/* Contact Info */}
       <div className="footer-column">
          <h3>Contact us</h3>
         <div className="contact-info">
            <a href="mailto:contact@example.com">
            <FaEnvelope /> contact@example.com
            </a>
            <a href="tel:+152534468854">
             <FaPhone /> +250780528972
             </a>
             <a href="https://maps.google.com">
               <FaMapMarkerAlt /> View on Google Map
             </a>
           </div>
           <div className="social-icons">
             <a href="#"><FaFacebookF /></a>
             <a href="#"><FaTwitter /></a>
             <a href="#"><FaInstagram /></a>
             <a href="#"><FaLinkedinIn /></a>
           </div>
         </div>
   </div>

    {/* Footer Bottom */}
   <div className="footer-bottom">
     <p>2025© Doctris. Design & Develop with ❤ by Shreethemes.</p>
     <div>
        <Link to="/terms">Terms</Link> | <Link to="/privacy">Privacy</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </div>
    </div>

      {/* Scroll to Top Button */}
   <div className="scroll-to-top">
     <FaArrowUp />
    </div>
    </footer>
   );
};

export default Footer;
