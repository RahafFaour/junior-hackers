import React, { Component } from 'react'
import Navigation from "../Common/Navigation/Navigation"
import _ from 'lodash'
import { Container,Menu,Visibility } from 'semantic-ui-react'
import { paragraph1, paragraph2 } from './Information/content'
import Paragraph from './components/Paragraph'
import { fixedMenuStyle, menuStyle, overlayStyle, } from './Information/style'
import ImagePosition from './components/ImagePosition'
import Description from './components/Description'
import Menuhead from './components/Menuhead'


export default class OurVision extends Component {

  state = {
    menuFixed: false,
    overlayFixed: false,
    background: '#fff',
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state  

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: !this.state.overlayFixed })

  stickTopMenu = () => this.setState({ menuFixed: !this.state.menuFixed })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state;
    return (

      <React.Fragment >

        <Navigation />
      
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.stickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
          
          </Menu>
        </Visibility>
       <br/><br/>
        <Container text>
        <Menu.Item header><b>Mission</b><hr/></Menu.Item>
        
          <Paragraph para={paragraph1} />

        
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.stickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />
            
        <Menuhead overlayFixed={overlayFixed} handleOverlayRef={this.handleOverlayRef}/>
          
    
          
      <h6 ><b>Vision<hr/></b></h6>
          <Paragraph para={paragraph2} />
         
          {/* <ImagePosition position='right'/> */}
           <Description title='Over de regio'>
            Het project Pachachaca, dat door Yoreem wordt ondersteund, heeft haar basis in het plaatsje Calca, 
              hoofdstad van de gelijknamige provincie, in de regio Cusco. De provincie Calca telt circa 65.000 inwoners. 
              Ondanks de fraaie ligging, de vele natuurlijke bronnen en de levendige cultuur, heerst er veel armoede, 
              met alle sociale gevolgen van dien: een groot aantal kinderen groeit op in een instabiele en onveilige 
              thuissituatie. Een aantal van hen kan dan ook niet thuis wonen. Degenen die wel thuis opgroeien, ondervinden 
              in veel gevallen geweld of leven in een staat van verwaarlozing.Begeleiding van buitenaf bestaat niet voor 
              deze gezinnen. De kinderen worden vaak aan hun lot overgelaten. Armoede: vergelijkbaar met Congo en Bangladesh. 
              De cijfers spreken boekdelen: 68,5% van de bevolking van de provincie Calca kent armoede, 37,1% leeft zelfs in 
              extreme armoede. In de nabijgelegen gemeenschappen in de aangrenzende provincie Lares, zijn de cijfers nog 
              dramatischer: 89,8% leeft in armoede en 63,2% in extreme armoede. De provincie Calca kent een Human Development 
              Index van 0,55. het analfabetisme onder mannen is 12,5 procent, onder vrouwen is dit zelfs 31,7 procent. Ruim 55 
              procent van de kinderen in Calca volgt alleen basisonderwijs. Bijna 42 procent van de kinderen in Calca is ondervoed. 
              68,9 Procent van de vrouwen in Peru heeft te maken gehad met fysiek of seksueel geweld.
           </Description>

           <Description title='Pachachaca'>
           Het project Pachachaca is in 2006 opgezet door een Nederlands echtpaar als kindertehuis. In juli 2016 is de leiding 
            overgedragen aan het Nederlands-Peruaanse echtpaar Liesbeth Kerstens en Pavel Marmanillo. Beiden met een grote 
            internationale ervaring in het begeleiden van mensen in moeilijke omstandigheden. Zij bieden warmte, structuur, 
            rust en professionele begeleiding. Zij hebben geconstateerd dat de vraag om plaatsing in het gezinshuis door de 
            kinderrechter zo groot is, dat daaraan niet voldaan kan worden. Er wordt nu dan ook stevig ingezet op ambulante 
            begeleiding ter preventie en om situaties duurzaam te verbeteren en de familierelaties en –verantwoordelijkheden 
            zoveel mogelijk zichtbaar te maken en houden.
           </Description>
      
        </Container>
        
      </React.Fragment>
    )
  }
}