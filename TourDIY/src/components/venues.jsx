import React from 'react'

const Venues = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className='section' id='venues'>
            <h1>Venues</h1>
        </div>
    )
})

export default Venues