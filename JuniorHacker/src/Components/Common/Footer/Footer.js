import React, { Component } from 'react'
import './Footer.css';
import logo from "../../../Images/pachalogo2.png"
import yoreemlogo from "../../../Images/yorfooter.png"

export class Footer extends Component {
    render() {
        return (
            <div>
<footer className="footer-distributed" >

			<div className="footer-left">
            <img id="yoreemlogo" src={yoreemlogo} alt="logo"style={{marginLeft:25,marginTop:10}} />
			<span><img id="pachalogo" src={logo} alt="logo" style={{width: 222,height:33,marginLeft:20,marginTop:10}}/> </span>

				<h5 style={{marginLeft: 25,marginTop:10,color:'white'}}>Help Us!</h5>
					<button className="ui positive button"  style={{marginLeft:25}}>Donate</button>
					

				<p className="footer-company-name" style={{marginLeft:20,marginTop:10}}>Pachachacha © 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p style={{color:'white',marginTop:18}}className="footer-company-about">
					<span >About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					{/* <a href="#"><i className="fa fa-linkedin"></i></a> */}
					<a href="#"><i className="fa fa-instagram"></i></a>

				</div>

			</div>

		</footer>
            </div>
        )
    }
}

export default Footer
