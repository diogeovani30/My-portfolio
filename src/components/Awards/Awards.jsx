// src/components/Awards/Awards.jsx

import React from 'react';
import './Awards.css'; // Pastikan CSS diimpor dengan benar
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const Awards = () => {
  const awardsData = [
    
    {
      icon: <FaCertificate />,
      title: 'Web Development Fundamentals',
      issuer: 'Online Course Platform',
      date: 'September 2024',
      description: 'Completed advanced courses in HTML, CSS, and JavaScript for building web applications.',
    },
    {
      icon: <FaCertificate />,
      title: 'Scalable Web Service with Golang',
      issuer: 'Online Course Platform',
      date: 'March 2024',
      description: 'Completed advanced courses in Golang for building scalable web services with Golang.',
    },
    {
      icon: <FaCertificate />,
      title: 'FGA Bootcamp Web Development Program + React',
      issuer: 'Online Course Platform',
      date: 'August 2024',
      description: 'Completed advanced courses in React for building web applications.',
    },
    // Tambahkan penghargaan lainnya sesuai kebutuhan
  ];

  return (
    <div className="awards-container" data-aos="fade-up">
      <h2 className="awards-title">Awards & Certifications</h2>
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <div key={index} className="awards-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="awards-icon">{award.icon}</div>
            <h3 className="awards-title-text">{award.title}</h3>
            <p className="awards-issuer">{award.issuer}</p>
            <span className="awards-date">{award.date}</span>
            <p className="awards-description">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
