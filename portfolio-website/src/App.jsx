import { useState } from 'react'
import './App.css'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Experience from './section/Experience'
import Testimonial from './section/Testimonial'
import Contact from './section/Contact'
import Footer from './section/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero/>
      <About />
      <Projects/>
      <Experience/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
