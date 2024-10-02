// src/components/Education/Education.jsx

import React from 'react';
import './Education.css'; // Import CSS yang telah diperbarui

const Education = () => {
  const educationData = [
    {
      institution: 'Pasundan University',
      degree: 'Bachelor of engineering in informatics',
      duration: '2019 - 2024',
      description: 'Studied various aspects of computer science including algorithms, data structures, and web development.'
    },
    
   
  ];

  return (
    <div className="education-container" data-aos="fade-up">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card" data-aos="fade-up" data-aos-delay={index * 100}>
          
            <div className="education-icon">🎓</div> 
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
            <span className="education-duration">{edu.duration}</span>
            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
