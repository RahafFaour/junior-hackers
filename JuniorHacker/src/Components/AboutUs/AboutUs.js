import React from 'react';
import {Row, Col, Container, Media} from 'react-bootstrap'
import Personeel from './Personeel'
import Ytube from './Ytube'
import Ytube2 from './Ytube2'
import pachalogo2 from '../../Images/pachalogo2.png'
import yorfooter from '../../Images/yorfooter.png'
import Navigation from "../Common/Navigation/Navigation"


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
    <h5 style={{fontFamily:'Roman', color:'blue',fontWeight: 'bold'}}>Yoreem Organization</h5>
    <p style={{fontFamily:'Roman', justifyContent:'end'}}>
    Yoreem is a foundation (Stichting Yoreem Foundation). This foundation was founded in 2006 and has ANBI-approval. The board consists of Daphne Hebing, Wim Wesselo and René Sueters. They are very involved in the activities of Pachachaca, and are very happy to contribute their knowledge to the project.
        </p>
        <br/>
        <Ytube2/>
      </Media.Body>
      </Media>
         </Col>
        
        <Col>
        <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={pachalogo2}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5 style={{fontFamily:'Roman', color:'green',fontWeight: 'bold'}}>Pachacha Organization</h5>
    <p style={{fontFamily:'Roman'}}>
    Yoreem is a foundation (Stichting Yoreem Foundation). This foundation was founded in 2006 and has ANBI-approval. The board consists of Daphne Hebing, Wim Wesselo and René Sueters. They are very involved in the activities of Pachachaca, and are very happy to contribute their knowledge to the project.
    </p>
    <br/>
    <Ytube/>
  </Media.Body>
      </Media>
        </Col>
      </Row>
    </Container>
    <Personeel/>
      
    </div>
  )
}
