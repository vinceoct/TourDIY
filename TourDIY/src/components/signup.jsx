import React from 'react'

const Signup = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className='section' id='signup'>
            <h1>Sign Up</h1>
        </div>
    )
})

export default Signup