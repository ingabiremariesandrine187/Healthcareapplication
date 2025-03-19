import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/SingleBlog.css";
import image40 from "../assets/Checkup.webp";
import image41 from "../assets/Choose.jpg";
import image42 from "../assets/online.jpg";
import image43 from "../assets/sport.jpg";
import image44 from "../assets/preventive.webp";
import image45 from "../assets/latest.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Why Regular Checkups Are Important",
    image: image40,
    content: `
Regular checkups are crucial for maintaining overall health and detecting potential health issues early.

### Why Are Checkups Important?
- Early detection of diseases such as diabetes, high blood pressure, and cancer.
- Helps track your overall health and lifestyle habits.
- Doctors can provide guidance on diet, exercise, and stress management.

### Common Myths About Checkups
- **"I feel fine, so I don’t need a checkup."** Many conditions develop silently.
- **"Annual checkups are unnecessary."** Routine visits help prevent complications.

### Expert Advice
Dr. John Doe, a leading physician, says: "Prevention is better than cure. Regular visits to a doctor can significantly increase life expectancy."

### Conclusion
Prioritize your health by scheduling regular medical checkups!
    `,
  },
  {
    id: 2,
    title: "How to Choose the Right Specialist",
    image: image41,
    content: `
Finding the right specialist is essential for receiving the best medical care.

### How to Choose a Specialist?
- **Identify Your Needs:** Do you need a cardiologist, dermatologist, or orthopedic doctor?
- **Check Credentials & Experience:** Look for board-certified professionals.
- **Read Reviews:** Patient testimonials can give insight into the doctor's expertise.

### Mistakes to Avoid
- **Ignoring Referrals:** Your primary care physician can recommend the right specialist.
- **Choosing Based on Convenience:** Expertise is more important than proximity.

### Conclusion
Taking time to research and consult multiple specialists can help you receive the best treatment.
    `,
  },
  {
    id: 3,
    title: "Online vs. In-Person Consultations",
    image: image42,
    content: `
Online consultations are growing in popularity, but are they better than in-person visits?

### Benefits of Online Consultations
- **Convenience:** Speak to a doctor from anywhere.
- **Cost-Effective:** Saves time and travel expenses.
- **Quick Access:** Ideal for minor health concerns.

### When Should You See a Doctor In-Person?
- If you need a physical examination.
- For diagnostic tests like blood work or X-rays.
- When dealing with serious medical conditions.

### Conclusion
Both options have their place, but in-person visits remain essential for complex health issues.
    `,
  },
  {
    id: 4,
    title: "Healthy Lifestyle Tips for a Better Life",
    image: image43,
    content: `
A healthy lifestyle improves longevity and overall well-being.

### Top Healthy Lifestyle Tips
- **Eat a Balanced Diet:** Include fruits, vegetables, and lean proteins.
- **Exercise Regularly:** Aim for at least 30 minutes of physical activity daily.
- **Stay Hydrated:** Drink at least 8 glasses of water per day.
- **Get Enough Sleep:** Adults need 7-9 hours of sleep each night.

### Stress Management Techniques
- Practice meditation and deep breathing.
- Engage in hobbies that relax you.
- Maintain a healthy work-life balance.

### Conclusion
Adopting these habits can significantly improve your quality of life.
    `,
  },
  {
    id: 5,
    title: "The Importance of Preventive Care",
    image: image44,
    content: `
Preventive care is a proactive approach to maintaining long-term health.

### What Does Preventive Care Include?
- **Routine checkups and screenings.**
- **Vaccinations and immunizations.**
- **Health education on diet and lifestyle.**

### How Does It Benefit You?
- Helps detect diseases early.
- Reduces long-term healthcare costs.
- Improves life expectancy.

### Expert Insight
Dr. Sarah Lee: "Preventive care can prevent 80% of chronic diseases with early intervention."

### Conclusion
Prioritizing preventive care leads to a healthier, longer life.
    `,
  },
  {
    id: 6,
    title: "Latest Medical Advancements You Should Know",
    image: image45,
    content: `
Medical science is evolving rapidly, bringing new treatments and technologies.

### Recent Medical Innovations
- **AI in Healthcare:** Improves diagnostics and treatment planning.
- **Gene Therapy:** Revolutionizing treatment for genetic disorders.
- **3D-Printed Organs:** Offering hope for transplants.

### How These Advancements Affect You
- Faster and more accurate diagnoses.
- Personalized treatment plans.
- Improved patient outcomes.

### Conclusion
Staying informed about medical advancements helps patients make better healthcare choices.
    `,
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div className="single-blog-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="single-blog-image" />
      <div className="blog-content">
        {blog.content.split("\n").map((paragraph, index) => (
          paragraph.startsWith("###") ? 
            <h3 key={index}>{paragraph.replace("### ", "")}</h3> :
            <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
