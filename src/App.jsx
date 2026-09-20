import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/whychooseus'
import Services from './components/services'
import Doctors from './components/doctors'
import Appointment from './components/Appointment'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Doctors />
      <Appointment />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}

export default App
