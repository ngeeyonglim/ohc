import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <a 
                  href={props.action1Link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-button-filled cta-button1"
                >
                  {props.action1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  action1: 'Sign Up Now',
  content1:
    'Connect with like-minded individuals who share your values and beliefs.',
  heading1: 'Join An Event',
  action1Link: 'https://docs.google.com/spreadsheets/',
}

CTA.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1Link: PropTypes.string,
}

export default CTA
