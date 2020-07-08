import React, { Component } from 'react'
import { Header, Segment} from 'semantic-ui-react'
import Navigations from "../Common/Navigation/Navigation"
import personal from './personal.jpg'
import './style.css'

class AboutUs extends Component {



  render() {
    return (
      <div  style={{ backgroundImage: `url(/images/cloud1.jpg)`, height: '270px', backgroundSize: 'cover', padding: '50px', backgroundRepeat: 'no-repeat'}}>
        <Navigations/>
        <Header as='h2' attached='top' style={{ fontFamily: 'Arial Black', fontSize: '16px' }}>
          Our Story
            <Segment attached style={{ fontFamily: 'Times New Roman', fontSize: '14px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </Segment>
        </Header>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div>
          <div>
            <div className="container">
              <img src={personal} alt="Avatar" className="image"/>
                <div className="overlay">My Name is John<br/>Volunteer</div>
            </div>
            
          </div>
          <div>
            <div className="container" >
              <img src={personal} alt="Avatar" className="image"/>
                <div className="overlay">My Name is John<br/>Volunteer</div>
            </div>
              
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs

