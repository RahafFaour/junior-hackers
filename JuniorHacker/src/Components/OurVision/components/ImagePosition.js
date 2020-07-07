import React from 'react'
import { Image} from 'semantic-ui-react'
const ImagePosition = ({position='right'}) =>
                <Image
                        floated={position}
                        size='medium'
                        src='/Images/help.jpg'
                        style={{ margin: '6em -4em 2em 2em' }}
                />



export default ImagePosition
