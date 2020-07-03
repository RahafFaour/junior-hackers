import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import person from './person.jpg'
import styles from './styles.css'

const Personeel = () => (

       <div>
        {/* <div>
        <div class="container">
        <img src={person} alt="Avatar" class="image"/>
         <div class="overlay">My Name is John<br/>Volunteer</div>
            </div>
            
        </div>
        <div>
        <div class="container" id="float">
        <img src={person} alt="Avatar" class="image"/>
         <div class="overlay">My Name is John<br/>Volunteer</div>
            </div>
            
        </div> */}
        <Grid divided='vertically'>
          <Grid.Row columns={2} className='pink'>
            <Grid.Column width={3}>
            <Image src={person} className='profile-avatar'/>
            </Grid.Column>
            <Grid.Column className=''>
              <div>My name is John<br/>I am Volunteer</div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
          <Grid.Column width={13}>
              <div>My name is John<br/>I am Volunteer</div>
            </Grid.Column>
            <Grid.Column width={3}>
            <Image src={person} className='profile-avatar'/>
            </Grid.Column>
          </Grid.Row>
  </Grid>
        </div>
)

export default Personeel;