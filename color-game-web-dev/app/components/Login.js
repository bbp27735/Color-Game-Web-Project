'use client'
import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './Button';
import './Login.css';



const Login = (props) => {

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')


  const handleUsername = (event) => {
    setUsername(event.target.value);

  }

  const handlePass = (event) => {
    setPass(event.target.value);
  }



  const submitHandler = (event) => {
    event.preventDefault();
    const userLogin = {
      name: username,
      pass: pass,
      isLoggedIn: true /* This is a temporary solution to the login issue */
    }
    console.log(userLogin);
    props.onSaveUserData(userLogin);

    setUsername('')
    setPass('')



  }


  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          id="username"
          value={username}
          onChange={handleUsername}
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
