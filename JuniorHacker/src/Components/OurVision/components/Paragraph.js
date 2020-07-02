import React from 'react'

function Paragraph( {para} ){
    return  <p>{para.map(value=>value)}</p>
}

export default Paragraph
