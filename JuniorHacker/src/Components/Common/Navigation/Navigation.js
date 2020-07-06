import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, DropdownButton, NavDropdown, MenuItem, Nav, Form, FormControl, Button, } from 'react-bootstrap';

import logo from "../../../Images/pachalogo2.png"
import yoreemlogo from "../../../Images/yorfooter.png"
import { Link } from 'react-router-dom';

import './_header.css'
import React, { Component } from 'react'

export class Navigation extends Component {
  state = {
    navBackground: "",
    color:"",
    position:"",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 300 ? "" : "green";
      this.setState({ navBackground: backgroundcolor });
      const position = window.scrollY < 300 ? "" : "fixed";
      this.setState({ position: position });
 
    });
 
  }
  render() {
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ]

    return (

      <Container flex>
  
        <Row>
          <Col xs={12} md={8} >
            <div className="short_contact_list">
              <ul>
                <li> <i class="fa fa-phone"></i>+51 84 612495</li>
                <li><i class="fa fa-envelope"></i>info@pachachaca.org</li>
              </ul>
            </div>    </Col>
  
          <Col xs={6} md={4}>
            <div class="social_media_links d-none d-lg-block">
              <a href="https://www.facebook.com/PachachacaCalca">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/pachachaca.calca/">
                <i class="fa fa-instagram"></i>
              </a>
  
            </div>
  
          </Col>
        </Row>
        <br></br>
        <Row xs={1} md={1}  >
  
          <Col >
            <div className="header" style={{ backgroundColor: 'green', width: '100%', borderRadius: 10, height: 70, position: `${this.state.position}`,right:5,top:0}} >
     
              <a href="" className="logo"><img src={yoreemlogo} style={{ width: 35, paddingRight: 10 }} /><img src={logo} style={{ width: 95 }} /></a>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
              <ul className="menu" >
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/ourprogramme">Programmes</Link></li>
                <li><Link to="/ourvision">Our Vision</Link></li>
                <li><Link to="/album">Album</Link></li>
                <li><Link to="/newsletter">Newsletters</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
                <li><Link to="/donate">Donate</Link></li>
  
              </ul>
  
            </div>
          </Col>
  
        </Row>
  
  
      </Container>
  
    )
  }
}



export default Navigation
