// src/components/Skills/Skills.jsx

import React from 'react';
import './Skills.css';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: 'Pemrograman',
      icon: <FaCode />,
      skills: ['JavaScript', 'Python', 'Java', ],
    },
    {
      category: 'Frontend',
      icon: <FaTools />,
      skills: ['React', 'CSS', 'HTML'],
    },
    {
      category: 'Backend',
      icon: <FaServer />,
      skills: ['Node.js', 'Go', 'PHP'],
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Daftar Keterampilan</h2>
      <div className="skills-grid">
        {skillsData.map((categoryItem, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{categoryItem.icon}</div>
            <h3 className="skill-category">{categoryItem.category}</h3>
            <ul className="skill-list">
              {categoryItem.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
