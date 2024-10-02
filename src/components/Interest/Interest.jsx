import React from 'react';
import './Interest.css'; // Import file CSS untuk styling
// Jika Anda ingin menggunakan ikon, impor dari pustaka ikon seperti react-icons
import { FaMusic, FaBook, FaGamepad, FaHiking } from 'react-icons/fa';

const Interest = () => {
  const interestsData = [
    {
      icon: <FaMusic />,
      title: 'Music',
      description: 'Playing the guitar and exploring various music genres.',
    },
    {
      icon: <FaBook />,
      title: 'Reading',
      description: 'Enjoying fiction and non-fiction books on technology and self-improvement.',
    },
    {
      icon: <FaGamepad />,
      title: 'Gaming',
      description: 'Engaging in strategic and role-playing games.',
    },
    {
      icon: <FaHiking />,
      title: 'Hiking',
      description: 'Exploring nature trails and staying active outdoors.',
    },
    // Tambahkan minat lainnya sesuai kebutuhan
  ];

  return (
    <div className="interest-container" data-aos="fade-up">
      <h2 className="interest-title">Interests</h2>
      <div className="interest-grid">
        {interestsData.map((interest, index) => (
          <div key={index} className="interest-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="interest-icon">{interest.icon}</div>
            <h3 className="interest-title-text">{interest.title}</h3>
            <p className="interest-description">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
