import React, { Component } from 'react'
import './Footer.css';
import logo from "../../../Images/pachalogo2.png"
import yoreemlogo from "../../../Images/yorfooter.png"


export class Footer extends Component {
	render() {
		return (
			<div className="myfooter">
				<h1>CONTACT + INFORMATION</h1>
				<div className="contact">

					<p>
					<b>Address</b>	
				
					<br></br>City Country , Postal Code<br></br>
					<a href="">itsme@gmail.com</a>|<a href="">3333</a>
					</p>
				</div>

			</div>
		)
	}
}

export default Footer
