import React from 'react'

function Map() {
    return (
        <div>
            <div style={{width: "70%", marginLeft: "15%", marginTop: "5px"}}>
            <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)
            &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <a href="http://www.gps.ie/">GPS coordinates</a></div>
        </div>
    )
}

export default Map
