import React from 'react';
import {Row, Col, Container, Media} from 'react-bootstrap'
import Personeel from './Personeel'
import pachalogo2 from '../../Images/pachalogo2.png'
import yorfooter from '../../Images/yorfooter.png'
import Navigation from "../Common/Navigation/Navigation"
import Footer from "../Common/Footer/Footer"


export default function AboutUs() {
  return (
    <div>
      <Navigation/>
      <br></br><br></br>
    <Container>
      <Row>
        <Col>

        <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={yorfooter}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 style={{fontFamily:'Roman', color:'blue'}}>Yoreem Organization</h5>
    <p style={{fontFamily:'Roman'}}>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
      </Media>
         </Col>
        
        <Col>
        <Media>
  <img
    width={99}
    height={66}
    className="mr-3"
    src={pachalogo2}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 style={{fontFamily:'Roman', color:'green'}}>Pachacha Organization</h5>
    <p style={{fontFamily:'Roman'}}>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
        </Col>
      </Row>
    </Container>
    <Personeel/>
      <Footer/>
    </div>
  )
}
