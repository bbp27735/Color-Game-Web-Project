'use client'
import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './Button';
import './Login.css';



const Login = (props) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const handleEmail = (event) => {
    setEmail(event.target.value);

  }

  const handlePass = (event) => {
    setPass(event.target.value);
  }



  const submitHandler = (event) => {
    event.preventDefault();
    const userLogin = {
      email: email,
      pass: pass,
      isLoggedIn: true /* This is a temporary solution to the login issue */
    }
    console.log(userLogin);
    props.onSaveUserData(userLogin);

    setEmail('')
    setPass('')



  }


  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>E-Mail</label>
        <input
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label>Password</label>
        <input
          type="password"
          id="age"
          value={pass}
          onChange={handlePass}
        />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
