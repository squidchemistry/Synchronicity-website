import React from 'react'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <img src={logo} alt="Synchronicity Logo" style={{ width: 120 }} />
      <h1>Synchronicity</h1>
      <p>Where AI meets Cryptocurrency</p>
      
      <button onClick={() => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}}>
  Explore Platform
</button>
    </section>
  )
}

export default Hero
