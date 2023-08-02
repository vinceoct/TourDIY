import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap/'
import { AuthContext } from '../context/authprovider';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login, logout } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", { email, password });
      const { token } = response.data;
      
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)

      login({ email })
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred during login.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email') 
    logout(); 
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="emaillogin" className="col-4 col-form-label">Email</label> 
                <div className="col-8">
                <input id="emaillogin" name="emaillogin" type="text" required className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="passwordlogin" className="col-4 col-form-label">Password</label> 
                <div className="col-8">
                <input id="passwordlogin" name="passwordlogin" type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div> 
            <div className="form-group row">
                <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn custsecondary">Submit</button>
                </div>
            </div>
        </Form> 
        {errorMessage && <div className="error-message">{errorMessage}</div>} 
      </div>
    </div>
  );
};

export default Login;
