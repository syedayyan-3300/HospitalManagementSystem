import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Hospital Management System</h1>
        <p>Your health, our priority</p>
      </header>
      
      <section className="home-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Outpatient Services</h3>
            <p>Comprehensive outpatient services for a variety of medical conditions.</p>
          </div>
          <div className="service-item">
            <h3>Inpatient Services</h3>
            <p>State-of-the-art inpatient facilities for patient care and recovery.</p>
          </div>
          <div className="service-item">
            <h3>Emergency Services</h3>
            <p>24/7 emergency services to handle urgent medical situations.</p>
          </div>
          <div className="service-item">
            <h3>Laboratory Services</h3>
            <p>Advanced laboratory services for accurate diagnostics.</p>
          </div>
        </div>
      </section>
      <Container>
        <div className='all-boxes'>
      <Grid container spacing={10}  className="home-cards">
      
      <Grid item xs={12} sm={6} md={4}>
        <div className="card" onClick={() => navigate('/bookappointment')}>
          <FontAwesomeIcon icon={faHospital} className="custom-icon-size" />
          <span>Book an Appointment</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="card">
          <FontAwesomeIcon icon={faHospital} className="custom-icon-size" />
          <span>Book Health Check-Up</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="card active">
          <FontAwesomeIcon icon={faHospital} className="custom-icon-size" />
          <span>Consult Online</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="card">
          <FontAwesomeIcon icon={faHospital} className="custom-icon-size" />
          <span>Buy Medicine</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="card">
          <FontAwesomeIcon icon={faHospital} className="custom-icon-size" />
          <span>Find Hospital</span>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="card">
          <FontAwesomeIcon icon={faHospital} className="custom-icon-size" />
          <span>View Health Record</span>
        </div>
      </Grid>
    </Grid>
    </div>
 
        {/* Repeat for other cards */}
      <section className="home-contact">
        <Typography variant="h4" component="h2">Contact Us</Typography>
        <Typography variant="body1" component="p">For appointments and inquiries, please contact us:</Typography>
        <Typography variant="body1" component="p">Phone: (123) 456-7890</Typography>
        <Typography variant="body1" component="p">Email: contact@hospitalmanagement.com</Typography>
      </section>
    </Container>

    </div>
  );
};

export default Home;
