
import React from 'react'
import Navigations from "../Common/Navigation/Navigation"
import './NewsLetter.css'
import Footer from "../Common/Footer/Footer"

const NewsLetter = props => {
    return (
        <div>
            <Navigations />
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} alt="Newsimage" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                    <a href="https://pachachaca.org" className="btn btn-outline-dark">Complete Reading</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NewsLetter
