import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  )
}
export default App
