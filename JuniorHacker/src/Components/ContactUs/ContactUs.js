import React from 'react'
import {Container, Row, Col, Button,Card} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Map from '../Map/Map.js'
import Navigation from "../Common/Navigation/Navigation"
import contact from './contact.jpg'
import Footer from "../Common/Footer/Footer"
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
                    <Card.Img  src={contact} style={{opacity: 0.5}}/>
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
          </div><br></br><br></br><br></br>
          <Footer/>
          </React.Fragment>
          )
export default FormExampleFieldControlId