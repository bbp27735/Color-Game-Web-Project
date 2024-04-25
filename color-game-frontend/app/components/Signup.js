'use client'
import React, { useState, useContext } from 'react';
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
    setFormData({
      ...formData,
      username: event.target.value,
    });
    setUsername(event.target.value);

  }

  const handlePass = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
    setPass(event.target.value);
  }

  const handleEmail = (event) => {
    setFormData({
      ...formData,
      email: event.target.value,
    });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup request to the server
      console.log(formData);
      const signupRes = await axios.post('http://localhost:8084/api/users/signup', formData);
      // Send login request to the server
      const loginRes = await axios.post('http://localhost:8084/login', {
        email: formData.email,
        password: formData.password
      });

      // Update user data upon successful signup
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });

      // Store the authentication token in local storage
      localStorage.setItem("auth-token", loginRes.data.token);

      // Optionally, you can redirect the user to another page upon successful signup
      // router.push('/some-path');
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error
    }
  };



  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
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