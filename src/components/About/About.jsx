import React, { useEffect } from "react";
import "./About.css";
import profileImage from "../../assets/profile.jpeg"; 
import { FaEye, FaBullseye } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,    
    });
  }, []);

  return (
    <div className="about-container">
      <h2 className="about-title">Tentang Saya</h2>
      <div className="about-header" data-aos="fade-up">
        <img src={profileImage} alt="Profil" className="profile-image" />
        <div className="about-intro">
          <p>
            Halo! Saya M.Dio Geovani, lulusan terbaru dari Universitas Pasundan jurusan Teknik Informatika yang berpengalaman dalam organisasi dan memiliki wawasan luas. Memiliki pengalaman magang sebagai Data Support di PT. Erajaya Swasembada TBK. Berorientasi pada proses, pemimpin yang dapat diandalkan, dan sangat terampil dengan pengetahuan di bidang Teknologi Informasi.
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="about-section" data-aos="fade-up" data-aos-delay="200">
          <div className="about-icon">
            <FaEye />
          </div>
          <h2>Visi</h2>
          <p>
            Visi saya adalah menciptakan aplikasi yang user-friendly dan memberikan nilai tambah bagi pengguna.
          </p>
        </div>
        <div className="about-section" data-aos="fade-up" data-aos-delay="400">
          <div className="about-icon">
            <FaBullseye />
          </div>
          <h2>Misi</h2>
          <p>
            Misi saya adalah untuk mengembangkan aplikasi yang user-friendly dan memberikan nilai tambah bagi pengguna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
