import React from 'react'

function Description({title,children}) {

    return (
        <React.Fragment>
            <h6><b>{title}<hr/></b></h6>

            <p>
                {children}
            </p>
        </React.Fragment>
    )
}

export default Description
