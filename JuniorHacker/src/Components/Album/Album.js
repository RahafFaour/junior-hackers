import React from 'react'
import Navigation from "../Common/Navigation/Navigation"
import Carousel from 'react-bootstrap/Carousel'
import {Container, Row, Col} from 'react-bootstrap'
import album1 from "../../Images/album1.jpg"
import album2 from "../../Images/album2.jpg"
import album3 from "../../Images/album3.jpg"
import album4 from "../../Images/album4.jpg"
import album5 from "../../Images/album5.jpg"
import album6 from "../../Images/album6.jpg"


function Album() {
  return (
    <div>
      <Navigation/>
      <br></br><br></br>
  <Container>

  <Row>
    <Col>
    <Carousel className="d-block w-50px">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={album1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={album2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={album3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </Col>
    <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Album 2016</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Col>
    <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Memories</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
    Nulla vitae elit libero, a pharetra augue mollis interdum.
    Nulla vitae elit libero, a pharetra augue mollis interdum
    Nulla vitae elit libero, a pharetra augue mollis interdum</p>
    </Col>
  </Row>
</Container>
    <br/><br/>
    <Container>

    <Row>

    <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Memories</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
      Nulla vitae elit libero, a pharetra augue mollis interdum.
      Nulla vitae elit libero, a pharetra augue mollis interdum
      Nulla vitae elit libero, a pharetra augue mollis interdum</p>
      </Col>
     
      <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Album 2017</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Col>
      <Col>
      <Carousel className="d-block w-50px">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={album4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={album5}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={album6}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
    </Container>
    <br/><br/>
    <Container>

  <Row>
    <Col>
    <Carousel className="d-block w-50px">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={album1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={album2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={album3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </Col>
    <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Album 2018</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Col>
    <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Memories</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
    Nulla vitae elit libero, a pharetra augue mollis interdum.
    Nulla vitae elit libero, a pharetra augue mollis interdum
    Nulla vitae elit libero, a pharetra augue mollis interdum</p>
    </Col>
  </Row>
</Container>
    <br/><br/>
    <Container>

    <Row>

    <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Memories</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
      Nulla vitae elit libero, a pharetra augue mollis interdum.
      Nulla vitae elit libero, a pharetra augue mollis interdum
      Nulla vitae elit libero, a pharetra augue mollis interdum</p>
      </Col>
     
      <Col><h1 style={{fontFamily:'Roman', color:'black'}}>Album 2019</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Col>
      <Col>
      <Carousel className="d-block w-50px">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={album4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={album5}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={album6}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      </Col>
    </Row>
    </Container>
     
    </div>
  )
}


export default Album;