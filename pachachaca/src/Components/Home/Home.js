import React, { Component } from 'react'
import image1 from '../../Images/image1.jpg'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import Navication from "../Common/Navication/Navication"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

class Home extends Component {
  render() {
    const content = [
      {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
         "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: image1,
        user: "Luan Gjokaj",
      },
      {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: image2,
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
        <Navication />
        <Slider autoplay={2000} className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center`, }}>
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );

<<<<<<< HEAD
        return (
            <Layout>
                {window.screen.width <= 1022 ?
                    <Drawer id="fixedheader" title="Pachachaca" >
                        <Navigation >
                            <Link to="/" className="linkto">Home</Link>
                            <Link to="ourProgramme" className="linkto">OurProgramme</Link>
                            <Link to="aboutUs" className="linkto">AboutUs</Link>
                            <Link to="ourVision" className="linkto">OurVision</Link>
                            <Link to="album" className="linkto">Album</Link>
                            <Link to="newsletters" className="linkto">Newsletters </Link>
                            <Link to="donate" className="linkto">Donate </Link>
                        </Navigation>
                    </Drawer> :
                    <Header id="fixedheader" className="header-color" title={<div><img id="pachalogo" src={logo} alt="logo"/>  <img id="pachalogo" src={logo} alt="logo"/></div>}  scroll>
                        <Navigation id="nav">
                        <Link to="/" className="linkto">Home</Link>
                            <Link to="ourProgramme" className="linkto">OurProgramme</Link>
                            <Link to="aboutUs" className="linkto">AboutUs</Link>
                            <Link to="ourVision" className="linkto">OurVision</Link>
                            <Link to="album" className="linkto">Album</Link>
                            <Link to="newsletters" className="linkto">Newsletters </Link>
                            <Link to="donate" className="linkto">Donate </Link>
                        </Navigation>
  
                    </Header>}
                <SimpleImageSlider
                    width={`100%`}
                    height={`100%`}
                    images={images}
                />
                <Content>
                     <div className="page-content" />
                 </Content>
            </Layout>
        );
    }
=======
  }
>>>>>>> bc6499564a2f3452b1cfec513ea4bdc0cd6e7045
}
export default Home;