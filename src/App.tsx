import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import About from './components/about/About'
import Notice from './components/notice/Notice'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Notice />

    </>
  )
}
export default App
