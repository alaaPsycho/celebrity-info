import React from 'react'
import Hero from '../components/Hero'
import Celebrity from '../components/Celebrity'
import Footer from '../components/Footer';

function home() {
  return (
    <div className='home'>
     <Hero />
    <Celebrity />
    <Footer />
    </div>
  )
}

export default home