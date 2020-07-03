import React from 'react'
import {Media} from 'react-bootstrap'
import person from './person.jpg'


const Personeel = () => (
 
     <div>
       <Media>
         <img
    width={64}
    height={64}
    className="mr-3"
    src={person}
    alt="Generic placeholder" />
         <Media.Body>
    <h5>Top Manager</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque<br/>
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
     </p>
        </Media.Body>
      </Media>

      <Media>
         <img
    width={64}
    height={64}
    className="mr-3"
    src={person}
    alt="Generic placeholder" />
         <Media.Body>
    <h5>Top Manager</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque<br/>
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
     </p>
        </Media.Body>
      </Media>
      
      </div>

      

         
        
)

export default Personeel;