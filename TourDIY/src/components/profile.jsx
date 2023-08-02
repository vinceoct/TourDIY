import React, { useContext, useState } from 'react';
import CreateAccount from './createaccount';
import Login from './login';
import ArtistAccount from './artistaccount';
import { AuthContext } from '../context/authprovider';
import { Button } from 'react-bootstrap/'

const Signup = React.forwardRef((props, ref) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const { loggedIn } = useContext(AuthContext);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowCreateAccount(false);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
    setShowCreateAccount(true);
  };

  return (
    
    <div ref={ref} className='section' id='signup'>
      {!loggedIn && !showCreateAccount && !showLogin && (
        <>
          <Button className='custsecondary' onClick={handleLoginClick}>Login</Button>
          <Button className='custsecondary' onClick={handleSignUpClick}>Sign Up</Button>
        </>
      )}
     
      {showLogin && !loggedIn && <Login />}
      {showCreateAccount && !loggedIn && <CreateAccount />}
      {loggedIn && <ArtistAccount />}
    </div>
  );
});

export default Signup