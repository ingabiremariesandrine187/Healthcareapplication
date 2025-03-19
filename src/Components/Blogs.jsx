import React from "react";
import '../style/Blogs.css'
import image40 from '../assets/Checkup.webp'
import image41 from '../assets/Choose.jpg'
import image42 from '../assets/online.jpg'
import image43 from '../assets/sport.jpg'
import image44 from '../assets/preventive.webp'
import image45 from '../assets/latest.jpg'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Regular Checkups Are Important",
      image: image40,
      description: "Regular checkups help detect diseases early and keep you healthy. Learn why scheduling an appointment matters.",
    },
    {
      id: 2,
      title: "How to Choose the Right Specialist",
      image: image41,
      description: "Finding the right doctor can be challenging. Here are some tips on selecting the best specialist for your needs.",
    },
    {
      id: 3,
      title: "Online vs. In-Person Consultations",
      image: image42,
      description: "Telemedicine is growing in popularity, but is it better than visiting a doctor in person? Find out in this article.",
    },

    {
        id: 4,
        title: "Healthy Lifestyle Tips for a Better Life",
        image: image43,
        description: "Discover the best practices for maintaining a healthy lifestyle, including diet, exercise, and stress management.",
      },
      {
        id: 5,
        title: "The Importance of Preventive Care",
        image: image44,
        description: "Preventive care can save lives. Learn how early detection and healthy habits can reduce your health risks.",
      },
      {
        id: 6,
        title: "Latest Medical Advancements You Should Know",
        image: image45,
        description: "Stay updated with the latest breakthroughs in medical science and how they impact patient care.",
      }












  ];

  return (
    <div className="blog-container">
      <h2>Latest Blogs</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
