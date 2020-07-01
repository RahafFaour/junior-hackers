import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer } from 'react-mdl'
import { Link } from 'react-router-dom';
import logo from "../../../Images/pachalogo.jpg"
import yoreemlogo from "../../../Images/yoreemlogo.png"

export class Navication extends Component {
    
    render() {
        return (
             <Layout>
                {window.screen.width <= 1022 ?
                    <Drawer >
                        <Navigation >
                            <Link to="/" className="linkto">Home</Link>
                            <Link to="programm" className="linkto">Programm</Link>
                            <Link to="Who" className="linkto">Who</Link>
                            <Link to="mission" className="linkto">Mission and Vission</Link>
                            <Link to="photos" className="linkto">Photos</Link>
                            <Link to="newsletters" className="linkto">Newsletters </Link>
                            <Link to="donate" className="linkto">Donate </Link>
                        </Navigation>
                    </Drawer> :
                    <Header id="fixedheader" className="header-color" title={<div><img id="yoreemlogo" src={yoreemlogo} alt="logo" />  <img id="pachalogo" src={logo} alt="logo" style={{marginLeft: 20,}}/></div>}  scroll>
                        <Navigation id="nav">
                        <Link to="/" className="linkto"><h5>Home</h5></Link>
                        <div className="subnav">
                            <button className="subnavbtn"><h5>Programm <i className="fa fa-caret-down"></i></h5></button>
                            <div className="subnav-content">
                            <a href="#company">Company</a>
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                            </div>
                        </div> 
                            {/* <Link to="programm" className="linkto">Programm</Link> */}
                            <Link to="Who" className="linkto" ><h5>Who</h5></Link>
                            <Link to="mission" className="linkto"><h5>Mission and Vission</h5></Link>
                            <Link to="photos" className="linkto"><h5>Photos</h5></Link>
                            <Link to="newsletters" className="linkto"><h5>Newsletters</h5></Link>
                            <Link to="donate" className="linkto"><h5>Donate</h5> </Link>
                        </Navigation>
  
                    </Header>}
            </Layout>    
        )
    }
}

export default Navication
