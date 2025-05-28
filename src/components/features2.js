import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1525026198548-4baa812f1183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description:
    'Engage in open-hearted discussions, share experiences, and learn from one another in a supportive environment.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: 'Open Hearted Discussions',
  feature1Title: 'Community Connection',
  feature2ImgAlt: 'Open Hearted Discussions Image',
  feature3Description:
    'Attend empowering events, workshops, and gatherings designed to inspire and uplift your mind, body, and spirit.',
  feature3ImgAlt: 'Empowering Events Image',
  feature3Title: 'Empowering Events',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1548815056-de4dab9bfd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImgAlt: 'Community Connection Image',
  feature1Description:
    'Join a community of like-minded individuals who share a passion for personal growth and collective well-being.',
}

Features2.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features2
