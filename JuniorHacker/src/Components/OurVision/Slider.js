import React, { Component } from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import img8 from "./images/img8.jpg"
import { Container} from "semantic-ui-react";
import "./mystyle.css"

export class Slider1 extends Component {

render(){

  return (
    
    <div >
      <Container  style={{ margin: 20 }}>
   
        <Reveal  animated='move up' >
          <Reveal.Content visible>
          <Image  id='img2' src={img8} class="img-responsive margin"  />
          </Reveal.Content>
        </Reveal>

      </Container>
    </div>   
  )
    }
}
export default Slider1
