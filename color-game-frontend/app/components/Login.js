'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';
import Card from './UI/Card';
import Button from './Button';
import './Login.css';


const Login = (props) => {

  const router = useRouter();
  //const userData = useContext(UserContext.user);
  //const setUserData = useContext(UserContext.setUserData);
  const { userData, setUserData } = useContext(UserContext);

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  

  // if user is logged in, they should be redirected

  useEffect(() => {
    if (userData.token) {
      router.push('/');
    }
  }, [userData.token, router]);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  // next need to do handleChange 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // send login request to the server
      const response = axios.post('http://localhost:8084/login', formData);
      setUserData({
        token: response.data.token,
        user: response.data.user,
      })
      // Store the authentication in local storage
      localStorage.setItem("auth-token", response.data.token);
      router.push('/gameplay');
    } catch (err) {
      console.log('Login Failed:', error);
      // handle login error
    }
  }

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

  if (!userData) {
    return (
      <div> <p> Loading... </p></div>
    )
  } else {
  return (
    <Card className="input">
      <form onSubmit={handleLogin}>
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
  }
};

export default Login;
