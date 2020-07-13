<<<<<<< HEAD
import React, { Component } from 'react'
import image1 from '../../Images/2.JPG'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import Navigation from "../Common/Navigation/Navigation"
import 'react-animated-slider/build/horizontal.css';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

import Services from "../Home/services/services"
import  "./services/services.css"


import Footer from "../Common/Footer/Footer"
import { Container, Row, Col } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";

class Home extends Component {
=======
import React from "react";
import Footer from "../Common/Footer/Footer";
import image1 from "../../Images/image2.jpg";
import image2 from "../../Images/1.JPG";
import image3 from "../../Images/22.JPG";
import "./styles.css";
import Navigation from "../Common/Navigation/Navigation";
import Services from "./Services"
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [image1, image2 , image3],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    // This will not run if we met the if condition above
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

>>>>>>> 88faaef8b302eed3e60584ca126abd228a400674
  render() {
    return (
<<<<<<< HEAD
      <div> 
        <Navigation/>          
        <Container fluid='xs'>
          
        {/* <Row > */}
          
          {/* <Col > */}

        <SimpleImageSlider   style={{marginTop:10,marginLeft:35, objectFit:'cover'}}
                    width={'96%'}
                    height={505}
                    images={images}
                />
                {/* </Col> */}
{/* </Row> */}
        </Container>
        
        <Services/>

      
        <Footer/>
      </div>
    );
=======
      <React.Fragment>
        <Navigation />
        <br></br>
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </div>
>>>>>>> 88faaef8b302eed3e60584ca126abd228a400674

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />

          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
        <Services/>
        <Footer/>
      </React.Fragment>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40% 40%",
  };
  return <div className="slide" style={styles}></div>;
};

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
};

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
};
export default Home;
