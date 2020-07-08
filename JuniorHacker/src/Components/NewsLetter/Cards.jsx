import React, { Component } from 'react'
import NewsLitter from './NewsLetter'
import './NewsLetter.css'
import newsimage1 from '../../Images/newsimage1.jpg'
import newsletter1 from '../../Images/newsletter1.png'
import newsletter2 from '../../Images/Theater1.jpg'
import newsletter3 from '../../Images/newsletter3.JPG'
import newsletter4 from '../../Images/newsletter4.JPG'
import newsletter5 from '../../Images/newsletter5.JPG'
import newsletter6 from '../../Images/newsletter6.jpg'

import Footer from "../Common/Footer/Footer"
import Navigation from "../Common/Navigation/Navigation"

export class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                            <Navigation />

                <div  className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <NewsLitter imgsrc={newsletter1} title="Familie boek"/>
                        </div>
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsletter2} title="Kinderen op het podium"/>
                        </div>
                        
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsletter3} title="Zomer workshop"/>
                        </div>
                        <div className="col-md-4">
                            <NewsLitter imgsrc={newsletter4} title="Feliz Navidad!"/>
                        </div>
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsletter5} title="Pachachaca workshop"/>
                        </div>
                        
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsletter6} title="Kookworkshops"/>
                        </div>


                    </div>
                </div>
                <Footer/>

            </React.Fragment>
        )
    }
}

export default Cards
