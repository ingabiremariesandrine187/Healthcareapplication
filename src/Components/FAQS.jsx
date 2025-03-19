import React, { useState } from "react";
import image30 from '../assets/image copy.png'
import '../style/FAQS.css';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "To book an appointment, go to the 'Book Appointment' page, select your preferred specialist, date, and time, then confirm your booking.",
    },
    {
        question: "How do I know if my appointment is confirmed?",
        answer: "You will receive a confirmation message via email or SMS after successfully booking your appointment.",
      },
    {
      question: "What types of specialists are available?",
      answer: "We have specialists in cardiology, neurology, orthopedics, dermatology, and more. You can choose a specialist based on your medical needs.",
    },
    {
      question: "How do I make a payment for my appointment?",
      answer: "Payments can be made online via credit/debit cards, PayPal, or at the clinic before your appointment.",
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, we use advanced encryption and security protocols to ensure your medical data remains private and secure.",
    },

    {
        question: "Can I consult a doctor online?",
        answer: "Yes, we offer telemedicine services where you can consult a doctor via video call from the comfort of your home.",
      },

      {
        question: "What should I bring to my appointment?",
        answer: "Please bring your ID, insurance card (if applicable), and any relevant medical records or test results.",
      },
      {
        question: "What if I miss my appointment?",
        answer: "If you miss your appointment, please contact our support team to reschedule at the earliest available slot.",
      }








  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div class="container">
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    <div class="doctor-two"><img src={image30} alt="Doctor" className="img30" /></div>
    </div>

    
  );
};

export default FAQS;
