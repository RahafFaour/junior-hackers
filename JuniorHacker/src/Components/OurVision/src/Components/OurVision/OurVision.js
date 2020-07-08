import  './mystyle.css'
import React, { Component } from 'react'
import Navigations from "../Common/Navigation/Navigation"
import bird from "./images/bird.jpg"
import Information from "./information1/information"
import Footer from "../Common/Footer/Footer"
import Slider1 from "./Slider"
import Slider11 from "./Slider11"
import Slider22 from "./Slider22"

export class OurVision extends Component {
  render() {
    return (

    <div>
      <Navigations/> <br/>
     
      <div id='dsp'>
      <div className="container-fluid bg-1 text-center">
        <h3 className="margin"><b> Vision & Mission </b></h3>
        <img id='img1' src={bird} className="img-responsive img-circle margin" width="350" height="350" alt="Bird"  display="inline"/>
        <h3>With a big smile we go in to the next years.. </h3>
      </div>
     
      <Information/>

      <div class="container-fluid bg-3 text-center">  
        <div class="row">
        <br/><br/><br/>
          <div class="col-sm-4"> 
            <h3>Our Vision</h3>
            <p>We work from the vision that everything must be done <br/> 
            to improve the household situation of children who are in social<br/>
             risk situations 
            <a href="https://pachachaca.org/about-us/" >More..</a></p>
            {/* <img id='img2' src={birds1} class="img-responsive margin"  alt="Image1"/> */}
            <Slider1/> 
          </div>

          <div class="col-sm-4"> 
            <h3>Our Mission</h3>
            <p>All Pachachaca activities contribute to improving the life of our children.<br/>
             The goal of the Pachachaca project is: "Providing educational support, 
             
            <a href="https://pachachaca.org/about-us/" >More..</a></p>
            {/* <img id='img3' src={birds2} class="img-responsive margin"  alt="Image1"/> */}
            <Slider11/>
          </div>

          <div class="col-sm-4"> 
            <h3>Yoreem Foundation</h3>
            <p>We support projects that we trust. And we only have trust if we <br/>know project 
            are thought through and contribute to an integral, long term
             
            <a href="https://www.yoreem.nl" >More..</a> </p> 
            {/* <img id='img4' src={birds3} class="img-responsive margin"  alt="Image1"/> */}
            <Slider22/>
          </div>
        </div>
      </div>
      <div>  
      </div>
    </div>
    <Footer/>
    </div>
    )
  }
}
export default OurVision

