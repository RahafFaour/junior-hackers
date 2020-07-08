import React from 'react'
import {Media, Container, Col,Row} from 'react-bootstrap'
import person from './person.jpg'
import person2 from './person2.jpg'


const Personeel = () => { 
     

     return (
             <div >

<Container>
  <Row>
    <Col>
    <div class="ui segment" >
                              <h3 class="ui center aligned header" style={{fontFamily:'Roman', color:'black',fontWeight: 'bold'}}>
                              Meet Our Team
                              </h3>
                              <p style={{fontFamily:'Roman', color:'black'}}>Liesbeth and Pavel have been living and working together in the Family Home of Pachachaca since 2016, where they support children in disadvantaged situations. Together they shape a life in which living and working is integrated in their shared vision. They apply their years of  knowledge and experience to the success of Pachachaca’s mission.</p>
                              </div>
    </Col>
  </Row>
</Container>
<br/><br/>

                          
     <Container>
          <Row>
          <Col>
          <Media>
          <img
               width={84}
               height={84}
               className="align-self-start mr-3"
               src={person2}
               alt="Generic placeholder"/>
              
          <Media.Body>
               <h5 style={{fontFamily:'Roman', color:'black', fontWeight: 'bold',display: 'flex',  justifyContent: 'center'}}>Liesbeth Kerstens</h5>
               <p style={{fontFamily:'Roman', color:'black',justifyContent:'end'}}>
               studied Leisure Management at the College of Tourism and Traffic in Breda and completed a master's degree in International Development Studies at the University of Amsterdam. She relocated and lived in Cusco, Peru between 2004 and 2009, during which time she created the Peruvian foundation Asociación Pasa la Voz. This foundation used to operate in the Cusco region to improve the living conditions of children who grow up in different forms of childcare. Pasa la Voz trained the staff of childcare organizations on pedagogical levels and promoted the active participation of children. Due to the success of Pasa la Voz, their methodologies had been translated into the Dutch environment at the request of the Municipality of Rotterdam. This led to the establishment of the Hoedje van Papier foundation, with Liesbeth as the then director in 2009. This foundation assists Rotterdammer’s adults and children in vulnerable situations to acquire skills toward active participation in society. Hoedje van Papier foundation was selected by the Oranjefonds (Royal funding organization in Holland) for the so-called ‘Growth Program’. Thanks to participation in this program and because of her commitment to the Dutch society, Liesbeth received a award from King Willem-Alexander.    
               </p>
               <div className="social-links">
                           <a href="https://www.instagram.com/liesbethkerstens/?igshid=9s73g1dup203"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-instagram" style={{color:'seagreen'}}></i></a>
                            <a href="https://www.facebook.com/liesbeth.kerstens" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-facebook f -square"  style={{color:'seagreen'}}></i></a>
                            <a href="https://www.linkedin.com/in/liesbeth-kerstens-316b9297/"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-linkedin-square"  style={{color:'seagreen'}}></i></a>
                        </div>
          </Media.Body>
          </Media>          
          </Col>
          </Row>
          <br/><br/>
          <Row>
          <Col>
          <Media>
          <img
               width={84}
               height={84}
               className="align-self-start mr-3"
               src={person}
               alt="Generic placeholder"
          />
          <Media.Body>
               <h5 style={{fontFamily:'Roman', color:'black',fontStyle:'bold',fontWeight: 'bold'}}>Pavel Marmanillo Barrio de Mendoza</h5>
               <p style={{fontFamily:'Roman', color:'black',justifyContent:'end'}}>
               studied mining at the University of San Antonio Abad del Cusco. He completed his studies and graduated from the University of Piura, Peru. Pavel runs a small family business together with his father, which maintains both socially conscious and commercial goals. In 2006 the business operations brought him to Brazil where he lived for a time.

               In addition to his work in the family business, Pavel is an active musician and writer. He combined these talents with volunteer work for various social projects which focus on care for women and children and environmental issues. His experience has been international in countries such as Peru, Colombia, Brazil, India, Nepal, Palestine and the Netherlands. </p>
               <div className="social-links">
               <a href="https://www.instagram.com/pachachaca.calca/"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-instagram" style={{color:'seagreen'}}></i></a>
                            <a href="https://www.facebook.com/PachachacaCalca" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-facebook f -square"  style={{color:'seagreen'}}></i></a>
                            <a href="https://www.linkedin.com/in/pavel-marmanillo-barrio-de-mendoza-92904325/"  rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-linkedin-square"  style={{color:'seagreen'}}></i></a>
                          </div>
          </Media.Body>
          
          </Media>          
          </Col>
          </Row>
          </Container>
       </div>     
)}

export default Personeel;