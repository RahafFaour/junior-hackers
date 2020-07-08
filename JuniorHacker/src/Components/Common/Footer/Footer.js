import React, { Component } from 'react'
import './Footer.css';
import {Container, Row, Col} from 'react-bootstrap'
import { Icon,Button, Image } from 'semantic-ui-react'
import annamuntz from '../../../Logo/annamuntz.jpg'
import haella from '../../../Logo/haella.png'
import hofstee from '../../../Logo/hofstee.png'
import logomano from '../../../Logo/logomano.png'
import logooreem from '../../../Logo/logooreem.png'
import marina from '../../../Logo/marina.png'
import weeshuis from '../../../Logo/weeshuis.png'
import wg from '../../../Logo/wg.png'
import { Link } from 'react-router-dom';

export class Footer extends Component {
	render() {

		return (
			<div className="myfooter">
				<h1>CONTACT + INFORMATION</h1>
				<Container fluid='xs'>
					<Row>
						<Col >
						<h7>Pachachaca:</h7><br></br>

						<Icon style={{display:"inline"}} aria-hidden="true"  name="marker" > 
							<a style={{marginLeft: 20}} >Prolongación calle Lamar s/n – Calca – Calca – Cusco</a>
						</Icon><br></br>
						<Icon style={{display:"inline"}} aria-hidden="true"  name="phone" > 
							<a style={{marginLeft: 15}} >+51 84 612495 | +51 84 612603 | +51 984119405 |<br></br> <a style={{marginLeft: 26}}>+51 993876434</a></a>
						</Icon>
						<br></br>
						<Icon style={{display:"inline"}} aria-hidden="true"  name="mail" > 

							<a style={{marginLeft: 10}} href='mailto:info@pachachaca.org'>info@pachachaca.org</a>
						</Icon>         

						</Col>
						<Col>
						<h7>Yoreem:</h7><br></br>

						<Icon style={{display:"inline"}} aria-hidden="true"  name="marker" > 
							<a style={{marginLeft: 20}} >Bergweg 209b, 3037 EJ Rotterdam</a>
						</Icon><br></br>
						<Icon style={{display:"inline"}} aria-hidden="true"  name="phone" > 
							<a style={{marginLeft: 15}} >0636143980</a>
						</Icon><br></br>
						<Icon style={{display:"inline"}} aria-hidden="true"  name="mail" > 

							<a style={{marginLeft: 10}} href='mailto:yoreemfoundation@gmail.com'>yoreemfoundation@gmail.com</a>
						</Icon>         
						
						</Col>
						<Col>
						<Icon style={{display:"inline"}} aria-hidden="true"  name="heart" > 
						<a style={{marginLeft: 15}} >We want to thank our donors and partners for making<a style={{marginLeft:30}}> Pachachaca possible</a></a><br></br>
						<Icon style={{display:"inline"}} aria-hidden="true"  name="handshake outline" > 
						<a style={{marginLeft: 15}} >Help Us!<br></br><Link to='/donate'><Button className="ui green button"  style={{marginLeft:30, marginTop:5}}> Donate</Button></Link></a>
						</Icon>  
						</Icon>  
						</Col>
					<Col>
					<Image.Group size='tiny' style={{marginTop: -34,}}>
					<Image src={marina} style={{marginTop:-10}} />
					<Image src={haella} />
					<Image src={hofstee} />
					<Image src={wg} />
					<Image src={annamuntz} />
					<Image src={logomano} style={{marginTop:-10}} />
					<Image src={logooreem} style={{marginTop:-15}} />
					<Image src={weeshuis}  style={{marginTop:-10}}/>
					{/* <Image src={pachalogo} style={{marginTop:-10}} /> */}

					</Image.Group>	
					
					</Col>
					</Row>
				</Container>

			</div>
		)
	}
}

export default Footer
