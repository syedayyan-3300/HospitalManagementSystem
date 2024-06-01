import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Typography, Grid, Avatar, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const BookAppointment = () => {
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointments, setAppointments] = useState([]);

  const specialties = [
    {
      name: 'Cardiology',
      doctors: [
        {
          name: 'Dr. Riyaz Baig',
          degree: 'MD Cardiology',
          photo: '/riyaz.jpg'
        },
        {
          name: 'Dr. Jane Smith',
          degree: 'MD Cardiology',
          photo: '/jane-smith.jpg'
        }
      ]
    },
    {
      name: 'Dermatology',
      doctors: [
        {
          name: 'Dr. Emily Johnson',
          degree: 'MD Dermatology',
          photo: '/emily-johnson.jpg'
        }
      ]
    },
    {
      name: 'General Surgery',
      doctors: [
        {
          name: 'Dr. Eram Fatema',
          degree: 'MD General Surgery',
          photo: '/eram-fatema.jpg'
        }
      ]
    },
    // Add more specialties and doctors as needed
  ];

  const handlePincodeChange = async (e) => {
    const newPincode = e.target.value;
    setPincode(newPincode);

    if (newPincode.length === 6) { // Assuming pincode length is 6
      try {
        const response = await axios.get(`https://api.example.com/getCityByPincode?pincode=${newPincode}`);
        setCity(response.data.city);
      } catch (error) {
        console.error("Error fetching city information:", error);
        setCity('');
      }
    } else {
      setCity('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      date: appointmentDate,
      time: appointmentTime,
      doctor: selectedDoctor
    };
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Book an Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Preferred Location/Pincode"
              variant="outlined"
              fullWidth
              required
              value={pincode}
              onChange={handlePincodeChange}
            />
          </Grid>
          {city && (
            <Grid item xs={12}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                value={city}
                disabled
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              label="Select Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Select Time"
              type="time"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Select Doctor"
              variant="outlined"
              fullWidth
              required
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              {specialties.map((specialty) =>
                specialty.doctors.map((doctor) => (
                  <MenuItem key={doctor.name} value={doctor.name}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Avatar src={doctor.photo} alt={doctor.name} />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" style={{ marginLeft: '10px' }}>
                          {doctor.name} - {doctor.degree}
                        </Typography>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))
              )}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Appointments for Today</Typography>
      <List>
        {appointments
          .filter(appointment => appointment.date === new Date().toISOString().split('T')[0])
          .map((appointment, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${appointment.doctor} - ${appointment.time}`} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default BookAppointment;
