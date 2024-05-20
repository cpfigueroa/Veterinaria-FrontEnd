import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sliderImage1 from '../../assets/alimentogato1.png';
import sliderImage2 from '../../assets/alimentogato1.png';
import sliderImage3 from '../../assets/alimentogato1.png';
import "./Slider.css"


const Slider = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      itemClass="carousel-item-padding-40-px custom-carousel-item"
      containerClass="custom-carousel-container"
      className="custom-carousel-container"
    >
      <div className="d-flex justify-content-center align-items-center custom-carousel-item" style={{ height: '100%' }}>
        <img className="d-block w-100" src={sliderImage1} alt="First slide" />
      </div>
      <div className="d-flex justify-content-center align-items-center custom-carousel-item" style={{ height: '100%' }}>
        <img className="d-block w-100" src={sliderImage2} alt="Second slide" />
      </div>
      <div className="d-flex justify-content-center align-items-center custom-carousel-item" style={{ height: '100%' }}>
        <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
      </div>
    </Carousel>
  );
};

export default Slider;
