// src/App.jsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Education from './components/Education/Education.jsx';
import Experience from './components/Experience/Experience.jsx';
import Skills from './components/Skills/Skills.jsx'; 
import Interest from './components/Interest/Interest.jsx';
import Awards from './components/Awards/Awards.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    
    });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Sidebar /> 

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
