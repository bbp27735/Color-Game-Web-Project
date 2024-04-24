'use client'
import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './Button';
import './Signup.css';
import axios from 'axios';
import UserContext from '../context/UserContext';



const Signup = (props) => {


  const axios = require('axios');

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

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
      password: pass,
      email: email,
    }
    console.log(userLogin);
    axios
      .post('http://localhost:8084/api/signup', userLogin)
      .then((res) => {
        props.onSaveUserData(userLogin);

        setUsername('')
        setPass('')
        setEmail('')
      })
      .catch((err) => {
        console.log("Error in CreateItem: " + err)
      })




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
