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
                            <Link to="ourprogramme" className="linkto">Our Programs</Link>
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
                            <button className="subnavbtn" style={{fontSize:20}}>Our Programs <i className="fa fa-caret-down"></i></button>
                            <div className="subnav-content">

                            <Link to='page1'>Page 1</Link>
                            <Link to='page2'>Page 2</Link>
                            <Link to='page3'>Page 3</Link>
                            <Link to='page4'>Page 4</Link>
                            

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
