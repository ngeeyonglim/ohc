import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="hero-strip1 thq-animated-group-horizontal"></div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image8Alt: 'Hero Image',
  action2: 'Learn More',
  image12Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1516143183226-6c61f3ed27a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Community gathering',
  image9Src:
    'https://images.unsplash.com/photo-1538113300105-e51e4560b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Hands reaching out',
  image11Src:
    'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Alt: 'Hero Image',
  content1:
    'A community of like-minded individuals coming together to share, learn, and grow. Join us in our journey towards a more connected and compassionate world.',
  image11Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1488698883284-b8e0d9820a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image5Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1531072091780-37593307f856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1517607648415-b431854daa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3M3w&ixlib=rb-4.1.0&q=80&w=1080',
  image7Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1493624339732-8064c0bb6aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1623134915831-9dcb66cf9a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1518708909080-704599b19972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3N3w&ixlib=rb-4.1.0&q=80&w=1080',
  action1: 'Join Us',
  image12Src:
    'https://images.unsplash.com/photo-1612490689933-b1a150e7aa5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NXw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: 'Welcome to Open Heart Collective',
  image8Src:
    'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODM2Njg3NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image9Alt: 'Hero Image',
  image10Alt: 'Hero Image',
}

Hero.propTypes = {
  image8Alt: PropTypes.string,
  action2: PropTypes.string,
  image12Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image4Alt: PropTypes.string,
  content1: PropTypes.string,
  image11Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image7Src: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  image12Src: PropTypes.string,
  heading1: PropTypes.string,
  image8Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
}

export default Hero
