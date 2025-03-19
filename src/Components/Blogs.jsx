import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Blogs.css";
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
    description: "Regular checkups help detect diseases early and keep you healthy.",
    content: "Regular checkups are essential for maintaining overall health...",
  },
  {
    id: 2,
    title: "How to Choose the Right Specialist",
    image: image41,
    description: "Finding the right doctor can be challenging. Learn some tips.",
    content: "Choosing the right specialist involves researching their credentials...",
  },
  {
    id: 3,
    title: "Online vs. In-Person Consultations",
    image: image42,
    description: "Is telemedicine better than visiting a doctor in person?",
    content: "Telemedicine is becoming more common due to its convenience...",
  },
  {
    id: 4,
    title: "Healthy Lifestyle Tips for a Better Life",
    image: image43,
    description: "Best practices for a healthy lifestyle, including diet and exercise.",
    content: "Maintaining a healthy lifestyle requires a balanced diet and regular exercise...",
  },
  {
    id: 5,
    title: "The Importance of Preventive Care",
    image: image44,
    description: "How early detection and healthy habits reduce health risks.",
    content: "Preventive care helps identify diseases before they become serious...",
  },
  {
    id: 6,
    title: "Latest Medical Advancements You Should Know",
    image: image45,
    description: "Stay updated with medical breakthroughs and their impact.",
    content: "Medical research is advancing rapidly, introducing new treatments...",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <h2>Latest Blogs</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more" onClick={() => navigate(`/blog/${post.id}`)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
