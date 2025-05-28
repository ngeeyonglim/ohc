import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Src:
    'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  review3:
    'Open Heart Collective has helped me grow personally and professionally. The shared knowledge and experiences have been invaluable.',
  author4Position: 'Mindfulness Practitioner',
  author4Src:
    'https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1:
    'Read what our community members have to say about their experience with Open Heart Collective.',
  author3Position: 'Wellness Coach',
  author3Name: 'David Johnson',
  author1Position: 'Yoga Instructor',
  review2:
    'I have found a sense of belonging and connection like never before. The events and workshops offered are enriching and empowering.',
  review1:
    'Being a part of Open Heart Collective has been a transformative experience. The support and positivity within the community are truly inspiring.',
  author2Position: 'Meditation Teacher',
  author1Src:
    'https://images.unsplash.com/photo-1512876644956-608be0ad8c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3M3w&ixlib=rb-4.1.0&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Name: 'Jane Smith',
  author1Alt: 'Image of John Doe',
  author2Alt: 'Image of Jane Smith',
  author4Name: 'Sarah Lee',
  review4:
    "I am grateful for the friendships I've made here. The sense of community and acceptance is truly heartwarming.",
  author3Alt: 'Image of David Johnson',
  author4Alt: 'Image of Sarah Lee',
  author1Name: 'John Doe',
  heading1: 'Testimonials',
}

Testimonial.propTypes = {
  author2Src: PropTypes.string,
  review3: PropTypes.string,
  author4Position: PropTypes.string,
  author4Src: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  author3Name: PropTypes.string,
  author1Position: PropTypes.string,
  review2: PropTypes.string,
  review1: PropTypes.string,
  author2Position: PropTypes.string,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Name: PropTypes.string,
  review4: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.string,
  heading1: PropTypes.string,
}

export default Testimonial
