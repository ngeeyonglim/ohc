import React from 'react'
import PropTypes from 'prop-types'

import './aboutus.css'

const AboutUs = (props) => {
  return (
    <div className="aboutus-container thq-section-padding">
      <div className="aboutus-content thq-section-max-width">
        <div className="aboutus-header">
          <h1 className="aboutus-title thq-heading-1">{props.heading}</h1>
          <p className="aboutus-subtitle thq-body-large">{props.subheading}</p>
        </div>
        
        <div className="aboutus-sections">
          <div className="aboutus-mission">
            <h2 className="aboutus-section-title thq-heading-2">{props.missionTitle}</h2>
            <p className="aboutus-section-content thq-body-large">{props.missionContent}</p>
          </div>
          
          <div className="aboutus-values">
            <h2 className="aboutus-section-title thq-heading-2">{props.valuesTitle}</h2>
            <div className="aboutus-values-list">
              {props.valuesList.map((value, index) => (
                <div key={index} className="aboutus-value-item thq-card thq-box-shadow">
                  <h3 className="aboutus-value-title thq-heading-3">{value.title}</h3>
                  <p className="aboutus-value-description thq-body-small">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="aboutus-story">
            <h2 className="aboutus-section-title thq-heading-2">{props.storyTitle}</h2>
            <p className="aboutus-section-content thq-body-large">{props.storyContent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutUs.defaultProps = {
  heading: 'About Open Heart Collective',
  subheading: 'We are a community-driven organization dedicated to fostering connection, compassion, and positive change.',
  missionTitle: 'Our Mission',
  missionContent: 'Open Heart Collective aims to create spaces where people can come together, share experiences, and support one another in personal and community growth.',
  valuesTitle: 'Our Values',
  valuesList: [
    {
      title: 'Compassion',
      description: 'We believe in approaching all interactions with kindness and empathy.'
    },
    {
      title: 'Authenticity',
      description: 'We encourage genuine self-expression and honest communication.'
    },
    {
      title: 'Inclusion',
      description: 'We welcome diverse perspectives and create spaces where everyone belongs.'
    },
    {
      title: 'Growth',
      description: 'We support continuous learning and personal development.'
    }
  ],
  storyTitle: 'Our Story',
  storyContent: 'Open Heart Collective began in 2020 when a small group of friends recognized the need for meaningful connection in their community. What started as informal gatherings has grown into an organization dedicated to nurturing authentic relationships and supporting positive social impact initiatives.'
}

AboutUs.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  missionTitle: PropTypes.string,
  missionContent: PropTypes.string,
  valuesTitle: PropTypes.string,
  valuesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  storyTitle: PropTypes.string,
  storyContent: PropTypes.string
}

export default AboutUs