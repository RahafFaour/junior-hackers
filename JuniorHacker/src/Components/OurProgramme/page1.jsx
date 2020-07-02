import React, { Component } from 'react'
import Navigation from '../Common/Navigation/Navigation'
import Footer from "../Common/Footer/Footer"
import { Embed } from 'semantic-ui-react'


class page1 extends Component {
  render() {
    return (
      <div>
        <Navigation/>
       
        <div>
        <Embed
        id='125292332'
        placeholder='/images/vimeo-example.jpg'
        source='vimeo'
      />
        </div>

        <Footer/>
      </div>
    )
  }
}

export default page1

