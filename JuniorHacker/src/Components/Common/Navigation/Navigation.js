import { Navbar, DropdownButton, NavDropdown, MenuItem, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import logo from "../../../Images/pachalogo2.png"
import yoreemlogo from "../../../Images/yorfooter.png"
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

import { withRouter } from 'react-router-dom';

function Navigation() {
  const [shouldOpen, show] = useState(false);
//   const handleClick =(e)=>{
//   alert('---');
//   console.log(e.target.name)
// }
  return (
  
    <div>
        <div>
         <div className='App tc f3'>
        <Navbar className="navbar fixed-top" cl bg='light' expand='lg'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand ><img src={yoreemlogo} style={{width:40}} /></Navbar.Brand>
            <Navbar.Brand>  <img src={logo} style={{width:100}} /></Navbar.Brand>
            <Nav className="ml-auto" >
              <Nav.Link className="text-white" id="home" as={Link} to="/" href="/">Home</Nav.Link>
              <NavDropdown eventKey={2} title="Programmes" id="basic-nav-dropdown"
              onMouseEnter = { () => show(true) } onMouseLeave = { () => show(false) }
              show={ shouldOpen } > 
                {/* onClick={handleClick} name="prog" */}
                <NavDropdown.Item  id="programitem" className="text-white"  href="#action/3.1">Programe 1</NavDropdown.Item>
                <NavDropdown.Item  id="programitem" className="text-white" href="#action/3.2">Programe 2</NavDropdown.Item>
                <NavDropdown.Item id="programitem" className="text-white" href="#action/3.3">Programe 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id= "programitem" className="text-white" href="#action/3.4">Programe 4</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="aboutus" id="aboutus" className="text-white">About Us</Nav.Link>
              <Nav.Link as={Link} to="ourvision" id="ourvision" className="text-white">Our Vision</Nav.Link>
              <Nav.Link as={Link} to="album" id="album" className="text-white">Album</Nav.Link>
              <Nav.Link as={Link} to="newsletter" id="newsletter" className="text-white">Newsletters</Nav.Link>
              <Nav.Link as={Link} to="contactus" id="contactus" className="text-white">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="donate" id="donate" className="text-white">Donate</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </div>
    </div>
  )
}

export default withRouter(Navigation)
