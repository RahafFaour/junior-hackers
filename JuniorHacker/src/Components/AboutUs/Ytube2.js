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
      src:"https://www.youtube.com/embed/H1MNJDkhlQc&list=PL3R9LNtBGCpwViqZfWDZEk-fbHjDl0QEE&index=26",       
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