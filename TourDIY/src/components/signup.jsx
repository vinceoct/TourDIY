import React from 'react'
import CreateAccount from './createaccount'
import Login from './login'
const Signup = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className='section' id='signup'>
            <h1>Sign Up</h1>
            {/* <CreateAccount /> */}
            <Login />
        </div>
    )
})

export default Signup