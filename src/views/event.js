import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Eventslist from '../components/eventslist'
import './home.css'

const Event = (props) => {
  return (
    <div className="event-container">
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Navbar></Navbar>
      <Eventslist></Eventslist>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Event