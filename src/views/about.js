import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const About = (props) => {
  return (
    <div className="About-container">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Navbar></Navbar>
      {/* Add event calendar component*/}
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default About