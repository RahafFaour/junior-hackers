import React, { Component } from 'react'
import image1 from '../../Images/2.JPG'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import Navigation from "../Common/Navigation/Navigation"
import 'react-animated-slider/build/horizontal.css';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

import Footer from "../Common/Footer/Footer"
import { Container, Row, Col } from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";

class Home extends Component {
  render() {
    const images = [
      { url: image2},
      { url:image1 },
      { url: image3 },
      // { url: "images/4.jpg" },
      // { url: "images/5.jpg" },
      // { url: "images/6.jpg" },
      // { url: "images/7.jpg" },
  ];
    return (
      <div> 
        <Navigation/>          
        <Container fluid='xs'>
          
        {/* <Row > */}
          
          {/* <Col > */}

        <SimpleImageSlider   style={{marginTop:10,marginLeft:35, objectFit:'cover'}}
                    width={'96%'}
                    height={605}
                    images={images}
                />
                {/* </Col> */}
{/* </Row> */}
        </Container>

  
        <Footer/>
      </div>
    );

    }
}
export default Home;