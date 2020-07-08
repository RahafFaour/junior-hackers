import React, { Component } from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import img2 from "./images/img2.jpg"
import { Container} from "semantic-ui-react";
import "./mystyle.css"

export class Slider11 extends Component {

render(){
  

  return (
    
    <div >
      <Container  style={{ margin: 20 }}>
   
        <Reveal  animated='move up' >
          <Reveal.Content visible>
          <Image id='img3' src={img2} class="img-responsive margin"  alt="Image1"/>
          </Reveal.Content>
        </Reveal>

      </Container>
    </div>   
  )
    }
}
export default Slider11
