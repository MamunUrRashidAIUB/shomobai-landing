import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import About from './components/about/About'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </>
  )
}
export default App
