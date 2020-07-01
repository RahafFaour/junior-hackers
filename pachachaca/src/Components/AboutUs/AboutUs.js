import React, { Component } from 'react'
import { Header, Segment, Image, Grid} from 'semantic-ui-react'

export class AboutUs extends Component {

  
  
  render() {
    return (
      <div style={{backgroundImage: `url(/images/cloud1.jpg)`, height:'350px', backgroundSize: 'cover', padding:'50px', backgroundRepeat: 'no-repeat'}}>
     
     <Header as='h2' attached='top' style={{fontFamily: 'Arial Black', fontSize: '16px'}}>
            Our Story
            <Segment attached style={{fontFamily: 'Times New Roman', fontSize: '14px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Segment>
    </Header>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div>
    <Grid columns='three' divided>
    <Grid.Row floated='right'>
      <div className='ui image'><Grid.Column floated='left'>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        <Segment>I am Dareen Znbrakji</Segment>
      </Grid.Column></div>
      <br/>
      <div className='ui image'><Grid.Column floated='left'>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column></div>
      <br/>
     <div className='ui image'><Grid.Column floated='left'>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column></div>
    </Grid.Row>
    <br/> <br/>
      <div>
    <Grid.Row>
      <div className='ui image'><Grid.Column floated='right'>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column></div>
      <br/>
      <div className='ui image'><Grid.Column floated='right'>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column></div>
      <br/>
     <div className='ui image' floated='right'><Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column></div>
    </Grid.Row>
    </div>
  </Grid>
  
      </div>
  
      </div>
    )
  }
}

export default AboutUs

