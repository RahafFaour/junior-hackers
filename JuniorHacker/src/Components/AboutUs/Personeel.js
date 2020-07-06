import React from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import person from './person.jpg'
import person3 from './person3.jpg'
import person2 from './person2.jpg'

const Personeel = () => { 
     
     // const information = [{name:'Van Dijk', content:'Voulnteer', im:person},{name:'Rahaf Faour', content:'Developer', im:person1}]
     
     return (
             <div>
               {/* {information.map(value =><Media>
               <img
          width={94}
          height={94}
          className="mr-3"
          src={value.im}
          alt="Generic placeholder" />
           <Media.Body>
          <h5>{value.name}</h5>
          <p> {value.content} </p>
               </Media.Body>
               </Media>)} */}
               <br/> <br/> <br/>
               <Container>
               <div class="ui segment" style={{fontFamily:'Roman', color:'black'}}>
                    <h3 class="ui center aligned header">
                    Meet Our Team
                    </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
               
               <Row>
               <Col>
               
               <Card style={{ width: '14rem', height:'4 rem ', backgroundColor:'beige' }} className="text-center">
               <Card.Img variant="top" src={person3} style={{width: '14rem'}} className="text-center"/>
               <Card.Body>
               <Card.Title>Lente Van Dijk</Card.Title>
               <Card.Text>
                    General Manager
               </Card.Text>
               
               <div className="social-links">
                            <a href="https://github.com/RahafFaour" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-github-square"></i></a>
                            <i class="facebook f icon"></i>
                            <a href="https://www.linkedin.com/in/dareen-znbarakji-7b2321160/"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-linkedin-square"></i></a>
                        </div>
               </Card.Body>
               </Card>
               </Col>
               <Col>
               
               <Card style={{ width: '14rem', height:'4 rem ', backgroundColor:'beige'  }} className="text-center">
               <Card.Img variant="top" src={person} style={{width: '14rem'}} className="text-center"/>
               <Card.Body>
               <Card.Title>John Van Dijk</Card.Title>
               <Card.Text>
                    Developer
               </Card.Text>
               <div className="social-links">
                            <a href="https://github.com/RahafFaour" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-github-square"></i></a>
                            <i class="facebook f icon"></i>
                            <a href="https://www.linkedin.com/in/dareen-znbarakji-7b2321160/"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-linkedin-square"></i></a>
                        </div>

               </Card.Body>
               </Card>
               </Col>
               <Col>
               
               <Card style={{ width: '14rem',height:'4 rem ', backgroundColor:'beige' }} className="text-center">
               <Card.Img variant="top" src={person2} style={{width: '14rem'}} className="text-center"/>
               <Card.Body>
               <Card.Title>Leo Blok</Card.Title>
               <Card.Text>
                    Voulnteer
               </Card.Text>
               <div className="social-links">
                            <a href="https://github.com/RahafFaour" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-github-square"></i></a>
                            <i class="facebook f icon"></i>
                            <a href="https://www.linkedin.com/in/dareen-znbarakji-7b2321160/"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-linkedin-square"></i></a>
                        </div>

               </Card.Body>
               </Card>
               </Col>
               </Row>

               </Container>

       </div>     
)}

export default Personeel;