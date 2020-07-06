import React, { Component } from 'react'
import NewsLitter from '../NewsLetter/NewsLetter'
import newsimage1 from '../../Images/newsimage1.jpg'
import Footer from "../Common/Footer/Footer"

export class Cards extends Component {
    render() {
        return (
            <React.Fragment className="NewsLetter">
                <div  className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6">
                            <NewsLitter imgsrc={newsimage1} title="Programma 1"/>
                        </div>
                        <div className="col-md-6">
                             <NewsLitter imgsrc={newsimage1} title="Programma 2"/>
                        </div>
                        
                        <div className="col-md-6">
                             <NewsLitter imgsrc={newsimage1} title="Newsletter 3"/>
                        </div>
                        <div className="col-md-6">
                            <NewsLitter imgsrc={newsimage1} title="Newsletter 4"/>
                        </div>

                    </div>
                </div>
                <div style={{position:'relative',top:250}}><Footer/></div>

            </React.Fragment>
        )
    }
}

export default Cards
