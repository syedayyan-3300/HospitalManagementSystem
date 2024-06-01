import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to help you with any inquiries or assistance</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <h3>Address</h3>
          <p>123 Hospital Road, City, State, 12345</p>
        </div>
        <div className="info-item">
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="info-item">
          <h3>Email</h3>
          <p>info@hospitalmanagement.com</p>
        </div>
        <div className="info-item">
          <h3>Hours</h3>
          <p>Mon-Fri: 9am - 6pm</p>
          <p>Sat-Sun: 10am - 4pm</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d144.9560543154448!3d-37.81720974201433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c7ab33%3A0x5045675218cce7e0!2sHospital!5e0!3m2!1sen!2s!4v1599828471234!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="hospital-location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
