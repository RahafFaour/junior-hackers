import React from 'react'
import {  menu } from '../Information/content'
import {  overlayStyle, fixedOverlayStyle, fixedOverlayMenuStyle, overlayMenuStyle } from '../Information/style'
import { Icon,Menu } from 'semantic-ui-react'

const Menuhead = ({overlayFixed,handleOverlayRef}) => {
    return (
       
    <div ref={handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
             {menu.map((value,index)=>
                  <Menu.Item href={value.link} key={index}>
                  <Icon name={value.name} />
                  {value.title}  
                  </Menu.Item>
             )}

            </Menu>
    </div>
      
    )
}

export default Menuhead
