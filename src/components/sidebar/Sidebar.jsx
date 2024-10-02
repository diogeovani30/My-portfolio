// src/components/sidebar/Sidebar.jsx

import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';
import { 
  FaHome, 
  FaUser, 
  FaUniversity, 
  FaBriefcase, 
  FaTools, 
  FaHeart, 
  FaAward, 
  FaTimes, 
  FaBars 
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const handleToggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button 
        className="sidebar-toggle" 
        onClick={handleToggleSidebar} 
        aria-label="Toggle Sidebar"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      {/* Sidebar */}
      <nav ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`} aria-label="Main Navigation">
        <div className="sidebar-header">
          <h1 className="sidebar-logo">
            <Link to="/">M.Dio Geovani</Link>
          </h1>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaHome className="sidebar-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaUser className="sidebar-icon" />
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaUniversity className="sidebar-icon" />
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaBriefcase className="sidebar-icon" />
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaTools className="sidebar-icon" />
              Skills
            </Link>
          </li>
          <li>
            <Link to="/interest" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaHeart className="sidebar-icon" />
              Interest
            </Link>
          </li>
          <li>
            <Link to="/awards" className="sidebar-link" onClick={handleToggleSidebar}>
              <FaAward className="sidebar-icon" />
              Awards
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
