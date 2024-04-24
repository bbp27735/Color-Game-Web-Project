'use client'
import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './Button';
import './Signup.css';



const Signup = (props) => {

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')


  const handleUsername = (event) => {
    setUsername(event.target.value);

  }

  const handlePass = (event) => {
    setPass(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }


  const submitHandler = (event) => {
    event.preventDefault();
    const userLogin = {
      name: username,
      pass: pass,
      email: email,
    }
    console.log(userLogin);
    props.onSaveUserData(userLogin);

    setUsername('')
    setPass('')
    setEmail('')



  }


  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label>Username</label>
        <input
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <label>Password</label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={handlePass}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </Card>
  );
};

export default Signup;
