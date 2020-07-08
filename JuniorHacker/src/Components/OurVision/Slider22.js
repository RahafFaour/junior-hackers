import React, { Component } from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import birds1x from "./images/birds1x.jpg"
import { Container} from "semantic-ui-react";
import "./mystyle.css"


export class Slider22 extends Component {

render(){
  

  return (
    
    <div >
      <Container  style={{ margin: 20 }}>
   
        <Reveal  animated='move up' >
          <Reveal.Content visible>
          <Image id='img4' src={birds1x} class="img-responsive margin"  alt="Image1"/>
          </Reveal.Content>
        </Reveal>

      </Container>
    </div>   
  )
    }
}
export default Slider22
