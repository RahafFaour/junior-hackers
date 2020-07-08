import React from 'react';
import { Embed } from 'semantic-ui-react';
import yorfooter from '../../Images/yorfooter.png'

const EmbedExampleIframe = () => (
 <div style={{width:'400px', height:'350px'}}>
    <Embed 
    autoplay={false}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      src:"https://www.youtube.com/embed/oESWS-jqGjE",       
      allowFullScreen: true,
      style: {
        padding: 10,
      },
    }}
    placeholder={yorfooter}
  />
 </div>
)
export default EmbedExampleIframe