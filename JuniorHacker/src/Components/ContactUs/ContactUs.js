import React from 'react'
import { Header } from 'semantic-ui-react'
import {Container, Row, Col, Button,Card} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Navigation from "../Common/Navigation/Navigation"



const FormExampleFieldControlId = () => (
   <React.Fragment>
      <Navigation/>
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
</React.Fragment>

)

export default FormExampleFieldControlId
