// src/components/Experience/Experience.jsx

import React, { useEffect } from 'react';
import './Experience.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const experiences = [
    { title: '', company: 'PT.Erajaya Swasembadda Tbk. - Jakarta Barat, Indonesia .', duration: 'July 2022 - Sepetember 2022', description: ' Register and maintain All Data Material, Responsible to handle issue realted to SAP, System Create and Mantain Dashboard KPI using google Data Studio, Responsible handle a few project realted to effiency Data monitoring using google sheet and google data studio', icon: <FaBriefcase />, },
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">Pengalaman</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card" data-aos="fade-up">
            <div className="experience-icon">{exp.icon}</div>
            <h3 className="experience-role">{exp.title}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <span className="experience-duration">{exp.duration}</span>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
