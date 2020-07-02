import React, { Component } from 'react'
import image1 from '../../Images/image1.jpg'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import Navigation from "../Common/Navigation/Navigation"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import Footer from "../Common/Footer/Footer"

class Home extends Component {
  render() {
    const content = [
      {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
         "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: image2,
        user: "Luan Gjokaj",
      },
      {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: image1,
        user: "Erich Behrens",
      },
      {
        title: "Phasellus volutpat metus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: image3,
        user: "Bruno Vizovskyy",
      }
    ];

    return (
      <div>
        <Navigation />
        <Slider autoplay={2000} className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center`}}>
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <Footer/>
      </div>
    );

    }
}
export default Home;