import React, { Component } from 'react'
import './program.css'
import Navigation from '../Common/Navigation/Navigation'
import Footer from "../Common/Footer/Footer"
import { Embed } from 'semantic-ui-react'




export class page1 extends Component {
    render() {
        return (
            
            <div >
            <Navigation/>
            <div className="content-page">
           




            <h3>To learn more about us watch this video</h3>
        <hr/>
          <Embed
            className="difinition-video"
            id="O6Xo21L0ybE"
            placeholder="/images/image-16by9.png"
            source="youtube"
          />

          
          </div>
           
            <Footer/>
            </div>
            
        )
    }
}

export default page1
