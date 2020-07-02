import React from 'react'
import Navication from "../Common/Navication/Navication"
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import "./styles.css";
import album1 from "../../Images/album1.jpg"
import album2 from "../../Images/album2.jpg"
import album3 from "../../Images/album3.jpg"
import album4 from "../../Images/album4.jpg"
import album5 from "../../Images/album5.jpg"
import album6 from "../../Images/album6.jpg"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 2 },
  { width: 1, itemsToShow: 3 },
  { width: 1, itemsToShow: 4 }
];


function Album() {
  return (

    <div className='style'>
      <Navication />
        <div class="ui segment">
         <p>Album 2016</p>
        </div>
        <Carousel className="Album" breakPoints={breakPoints}>
         <Item><img src={album1} alt="{image}" className='image'/></Item>
        <Item><img src={album2} alt="{image}"/></Item>
        <Item><img src={album3} alt="{image}"/></Item>
        <Item><img src={album4} alt="{image}"/></Item>
        <Item><img src={album5} alt="{image}"/></Item>
        <Item><img src={album6} alt="{image}"/></Item>
      </Carousel>
      
        
     
    </div>
  )
}

export default Album
 