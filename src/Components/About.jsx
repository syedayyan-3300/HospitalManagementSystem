import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Committed to providing the best healthcare services</p>
      </header>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>To deliver high-quality, patient-centered healthcare with compassion and excellence.</p>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>To be a leading healthcare provider recognized for our exceptional patient care, innovative medical practices, and commitment to the community.</p>
      </section>

      <section className="about-history">
        <h2>Our History</h2>
        <p>Founded in 1990, our hospital has been serving the community for over 30 years. We started as a small clinic and have grown into a state-of-the-art medical facility.</p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            {/* <img src="" alt="Dr. John Doe" /> */}
            <img src="/riyaz.jpg" alt="Dr. John Doe" height="150px" width="150px" />
            <h3>Dr. M. R Baig</h3>
            <p>Chief Medical Officer</p>
          </div>
          <div className="team-member">
            {/* <img src="https://via.placeholder.com/150" alt="Dr. Jane Smith" /> */}
            <img src="/Amaan.jpeg" alt="Dr. John Doe" height="150px" width="150px" />


            <h3>Dr. Syed Amaan</h3>
            <p>Head of Surgery</p>
          </div>
          <div className="team-member">
            {/* <img src="https://via.placeholder.com/150" alt="Dr. Emily Johnson" /> */}
            <img src="/Ayyan.jpg" alt="Dr. John Doe" height="150px" width="150px" />

            <h3>Dr. Syed Ayyan</h3>
            <p>Head of Pediatrics</p>
          </div>
          <div className="team-member">
            {/* <img src="https://via.placeholder.com/150" alt="Dr. Michael Brown" /> */}
            <img src="/Adnan.jpeg" alt="Dr. John Doe" height="150px" width="150px" />

            <h3>Dr. Adnan</h3>
            <p>Head of Cardiology</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
