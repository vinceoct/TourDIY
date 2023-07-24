import React from 'react'
import '../css/custom-bootstrap-colors.css'
const Bands = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className='section' id='bands'>
            <h1>Bands</h1>
        </div>
    )
})

export default Bands