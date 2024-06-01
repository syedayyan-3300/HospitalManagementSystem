import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Providing comprehensive healthcare services</p>
      </header>
      
      <section className="services-list">
        <div className="service-item">
          <h2>Outpatient Services</h2>
          <p>Our outpatient services include general consultations, specialized consultations, and follow-up visits. We offer convenient appointment scheduling and minimal wait times.</p>
        </div>
        <div className="service-item">
          <h2>Inpatient Services</h2>
          <p>Our state-of-the-art inpatient facilities are designed for patient comfort and care. We provide a wide range of inpatient services including surgery, intensive care, and rehabilitation.</p>
        </div>
        <div className="service-item">
          <h2>Emergency Services</h2>
          <p>We offer 24/7 emergency services with a team of skilled professionals ready to handle any medical emergency. Our emergency department is equipped with the latest medical technology.</p>
        </div>
        <div className="service-item">
          <h2>Laboratory Services</h2>
          <p>Our advanced laboratory services offer a wide range of diagnostic tests to assist in the accurate diagnosis and treatment of medical conditions. We ensure quick and reliable test results.</p>
        </div>
        <div className="service-item">
          <h2>Radiology Services</h2>
          <p>Our radiology department provides comprehensive imaging services including X-rays, CT scans, MRI scans, and ultrasounds. We use the latest imaging technology for accurate diagnostics.</p>
        </div>
        <div className="service-item">
          <h2>Pharmacy Services</h2>
          <p>Our on-site pharmacy provides a wide range of medications and prescription services. Our pharmacists are available to offer advice and ensure you understand your medication regimen.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
