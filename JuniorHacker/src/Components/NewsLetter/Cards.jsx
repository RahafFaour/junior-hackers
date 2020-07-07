import React, { Component } from 'react'
import NewsLitter from './NewsLetter'
import './NewsLetter.css'
import newsimage1 from '../../Images/newsimage1.jpg'
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
                            <NewsLitter imgsrc={newsimage1} title="Newsletter 1"/>
                        </div>
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsimage1} title="Newsletter 2"/>
                        </div>
                        
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsimage1} title="Newsletter 3"/>
                        </div>
                        <div className="col-md-4">
                            <NewsLitter imgsrc={newsimage1} title="Newsletter 4"/>
                        </div>
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsimage1} title="Newsletter 5"/>
                        </div>
                        
                        <div className="col-md-4">
                             <NewsLitter imgsrc={newsimage1} title="Newsletter 6"/>
                        </div>


                    </div>
                </div>
                <Footer/>

            </React.Fragment>
        )
    }
}

export default Cards
