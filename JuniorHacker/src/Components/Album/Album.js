import React from 'react'
import Navigation from "../Common/Navigation/Navigation"
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import "./styles.css";
import album1 from "../../Images/album1.jpg"
import album2 from "../../Images/album2.jpg"
import album3 from "../../Images/album3.jpg"
import album4 from "../../Images/album4.jpg"
import album5 from "../../Images/album5.jpg"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 2 },
  { width: 1, itemsToShow: 3 },
  { width: 1, itemsToShow: 4 }
];


function Album() {
  return (

    <div className='style'>
      <Navigation />
        <div class="ui segment">
         <p>Album 2016</p>
        </div>
        <Carousel className="Album" breakPoints={breakPoints}>
         <Item><img src={album1} alt="{image}" className='image'/></Item>
        <Item><img src={album2} alt="{image}" className='image'/></Item>
        <Item><img src={album3} alt="{image}" className='image'/></Item>
        <Item><img src={album4} alt="{image}" className='image'/></Item>
        <Item><img src={album5} alt="{image}" className='image'/></Item>
      </Carousel>
      
        
     
    </div>
  )
}

export default Album


// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// export default function Album() {
//   return (
//     <div>
//       <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
//     </div>
//   )
// }

 