import React from 'react'
import CreateAccount from './createaccount'
const Signup = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className='section' id='signup'>
            <h1>Sign Up</h1>
            <CreateAccount />
        </div>
    )
})

export default Signup