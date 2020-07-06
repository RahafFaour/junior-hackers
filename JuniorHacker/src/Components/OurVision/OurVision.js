import  './mystyle.css'
import React, { Component } from 'react'
import Navigations from "../Common/Navigation/Navigation"
import bird from "./images/bird.jpg"
import birds1 from "./images/birds1.jpg"
import birds2 from "./images/birds2.jpg"
import birds3 from "./images/birds3.jpg"
import Information from "./information1/information"
import Footer from "../Common/Footer/Footer"


export class OurVision extends Component {
  render() {
    return (

    <div>
      <Navigations/> <br/>
       
    <div id='dsp'>
       
      <div class="container-fluid bg-1 text-center">
        <h3 class="margin"><b> Vision & Mission </b></h3>
        <img id='img1' src={bird} class="img-responsive img-circle margin" width="350" height="350" alt="Bird"  display="inline"/>
        <h3>With a big smile we go in to the next years.. </h3>
         
      </div>
          
      <Information/> 
         
      <div class="container-fluid bg-3 text-center">   
      
        <div class="row">
       
          <div class="col-sm-4"> 
            <h3>Our Vision</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="https://pachachaca.org/about-us/" >More..</a></p>
            <img id='img2' src={birds1} class="img-responsive margin"  alt="Image1"/>
          </div>

          <div class="col-sm-4"> 
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="https://pachachaca.org/about-us/" >More..</a></p>
            <img id='img3' src={birds2} class="img-responsive margin"  alt="Image1"/>
          </div>

          <div class="col-sm-4"> 
            <h3>Yoreem Foundation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="https://pachachaca.org/about-us/" >More..</a></p>
            <img id='img4' src={birds3} class="img-responsive margin"  alt="Image1"/>
          </div>
        </div>
      </div>

    </div>
    {/* <Footer/> */}
    </div>

    )
  }
}

export default OurVision

