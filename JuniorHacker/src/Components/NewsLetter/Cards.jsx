import React, { Component } from 'react'
import NewsLitter from './NewsLetter'
import './NewsLetter.css'
import newsimage1 from '../../Images/newsimage1.jpg'

export class Cards extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid d-flex justify-content-center">
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
            </div>
        )
    }
}

export default Cards
