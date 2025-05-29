import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Contact from '../components/contact'
import Footer from '../components/footer'
import AboutUs from '../components/aboutus'
import './home.css'

const About = (props) => {
  return (
    <div className="About-container">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default About