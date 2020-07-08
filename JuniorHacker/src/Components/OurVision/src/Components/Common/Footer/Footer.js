import React, { Component } from 'react'
import './Footer.css';
import logo from "../../../Images/pachalogo2.png"
import yoreemlogo from "../../../Images/yorfooter.png"

export class Footer extends Component {
    render() {
        return (
            <div>
<footer className="footer-distributed">

			<div className="footer-left">
            <img id="yoreemlogo" src={yoreemlogo} alt="logo" />
			<span><img id="pachalogo" src={logo} alt="logo" style={{width: 222,height:33,marginLeft:20}}/> </span>

				<p className="footer-links">
					<a href="https://pachachaca.org" className="link-1">Home</a>
					
					<a href="https://pachachaca.org">Blog</a>
				
					<a href="https://pachachaca.org">Pricing</a>
				
					<a href="https://pachachaca.org">About</a>
					
					<a href="https://pachachaca.org">Faq</a>
					
					<a href="https://pachachaca.org">Contact</a>
				</p>

				<p className="footer-company-name">Company Name © 2015</p>
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

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="https://pachachaca.org"><i className="fa fa-facebook"></i></a>
					<a href="https://pachachaca.org"><i className="fa fa-twitter"></i></a>
					<a href="https://pachachaca.org"><i className="fa fa-linkedin"></i></a>
					<a href="https://pachachaca.org"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
            </div>
        )
    }
}

export default Footer
