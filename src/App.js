import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PartyPackages from './components/PartyPackages';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/partypackages' element={<PartyPackages />} />
        <Route path='/bookings' element={<Booking />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
