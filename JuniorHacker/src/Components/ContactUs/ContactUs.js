import React from 'react'
import {Container, Row, Col, Button,Card} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Map from '../Map/Map.js'
import Navigation from "../Common/Navigation/Navigation"
import Footer from "../Common/Footer/Footer"
import contact from './contact.jpg'

const FormExampleFieldControlId = () => (
   <React.Fragment>
      <Navigation/>
   <div>
          <Container>
        <Row>
          <Col sm={6}>
            <br/><br/><br/>
          <Map/>
          <Card border="success" style={{ width: '38rem', marginLeft: '0' }}>
                    <Card.Body> 
                      <Card.Text>
                          Adres:
                    Prolongación calle Lamar s/n – Calca – Calca – Cusco
                    Tel:
                    +51 84 612495 | +51 84 612603
                    +51 984119405 | +51 993876434
                    Email Address:
                    info@pachachaca.org
                    Voor Yoreem Foundation:
                    Adres:
                    Bergweg 209b
                    3037 EJ Rotterdam
                    Tel: 0636143980
                    Email: yoreemfoundation@gmail.com
                      </Card.Text>
                    </Card.Body>
                   
                  </Card>
                  
          </Col>
          <Col sm={6}>
          <Card  style={{ width: '30rem' }} border="success">
                    <Card.Img variant="top" src={contact} style={{opacity: 0.5}}/>
                    <Card.Body>
                      <Card.Text>
                    <br/>
                    <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Form.Row>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="4" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
          </Col>
        </Row>
      </Container>
          </div>
      
      <br></br>
   <div  style={{backgroundImage:`url(/Images/contact.jpg)`, padding:'25px', width: '100%',height: '100%',backgroundSize:'contain, cover', backgroundRepeat: 'no-repeat',opacity:'0.5',backgroundPosition: 'center'
   }}>

   <Container>
      
  <Row>
   <Col></Col>
    <Col>
    <Header as='h2' style={{fontFamily:'Roman', color:'black', fontSize:' 20px'}}>Get In Touch</Header>
    <br/>
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Gender</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
      
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Contact Reasons</Form.Label>
    <Form.Control as="select" multiple>
      <option>Help</option>
      <option>Support</option>
      <option>Join Our Team</option>
      <option>Other</option>
      
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Col>
    <Col></Col>
  </Row>
</Container>

</div>
<Map/>
<Footer/>
</React.Fragment>

)


export default FormExampleFieldControlId
