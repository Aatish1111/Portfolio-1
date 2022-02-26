import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/services/Service'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer/>
    </>
  )
}

export default App