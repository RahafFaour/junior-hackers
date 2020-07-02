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
                        <Link to="/" className="linkto" style={{fontSize:20}}>Home</Link>
                        <div className="subnav">
                            <button className="subnavbtn" style={{fontSize:20}}>Oure Programme <i className="fa fa-caret-down"></i></button>
                            <div className="subnav-content">
                            <a href="#company">Page 1</a>
                            <a href="#company">Page 2</a>
                            <a href="#team">Page 3</a>
                            <a href="#careers">Page 4</a>
                            </div>
                        </div> 
                            {/* <Link to="ourprogram" className="linkto">Programm</Link> */}
                            <Link to="aboutus" className="linkto" style={{fontSize:20}} >About Us </Link>
                            <Link to="ourvision" className="linkto" style={{fontSize:20}}>Our Vision</Link>
                            <Link to="album" className="linkto" style={{fontSize:20}}>Album</Link>
                            <Link to="newsletter" className="linkto" style={{fontSize:20}}>Newsletters</Link>
                            <Link to="contactus" className="linkto" style={{fontSize:20}}>Contact Us </Link>
                            <Link to="donate" className="linkto" style={{fontSize:20}}>Donate </Link>
                        </Navigation>
  
                    </Header>}
            </Layout>    
        )
    }
}

export default Navigations
