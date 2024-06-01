import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import BookAppointment from './Components/BookAppointment';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/BookAppointment' element={<BookAppointment/>}/>

      </Routes>
    </Router>
  );
}

export default App;
