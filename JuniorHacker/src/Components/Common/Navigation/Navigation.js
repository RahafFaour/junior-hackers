import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer } from 'react-mdl'
import { Link } from 'react-router-dom';
import logo from "../../../Images/pachalogo2.png"
import yoreemlogo from "../../../Images/yorfooter.png"

 class Navigations extends Component {
    
    render() {
        return (
             <Layout>
                {window.screen.width <= 1022 ?
                    <Drawer >
                        <Navigation >
                            <Link to="/" className="linkto">Home</Link>
                            <Link to="ourprogramme" className="linkto">Oure Programme</Link>
                            <Link to="aboutus" className="linkto">About Us</Link>
                            <Link to="ourvision" className="linkto">Our Vision</Link>
                            <Link to="album" className="linkto">Album</Link>
                            <Link to="newsletter" className="linkto"><h5>Newsletters </h5></Link>
                            <Link to="contactus" className="linkto">Contact Us </Link>
                            <Link to="donate" className="linkto">Donate </Link>
                        </Navigation>
                    </Drawer> :
                    <Header id="fixedheader" className="header-color" title={<div><img id="yoreemlogo" src={yoreemlogo} alt="logo" />  <img id="pachalogo" src={logo} alt="logo"style={{width: 120,height:33,paddingLeft: 10,}}/></div>}  scroll>
                        <Navigation id="nav">
                        <Link to="/" className="linkto"><h5>Home</h5></Link>
                        <div className="subnav">
                            <button className="subnavbtn"><h5>Oure Programme <i className="fa fa-caret-down"></i></h5></button>
                            <div className="subnav-content">
                            <a href="#company">Company</a>
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                            </div>
                        </div> 
                            {/* <Link to="ourprogram" className="linkto">Programm</Link> */}
                            <Link to="aboutus" className="linkto" ><h5>About Us</h5></Link>
                            <Link to="ourvision" className="linkto"><h5>Our Vision</h5></Link>
                            <Link to="album" className="linkto"><h5>Album</h5></Link>
                            <Link to="newsletter" className="linkto"><h5>Newsletters</h5> </Link>
                            <Link to="contactus" className="linkto"><h5>Contact Us</h5></Link>
                            <Link to="donate" className="linkto"><h5>Donate</h5> </Link>
                        </Navigation>
  
                    </Header>}
            </Layout>    
        )
    }
}

export default Navigations
