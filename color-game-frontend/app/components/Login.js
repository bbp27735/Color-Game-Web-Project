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
  const [password, setPass] = useState('')

  

  // if user is logged in, they should be redirected

  useEffect(() => {
    if (userData.token) {
      router.push('/gameplay');
    }
  }, [userData.token, router]);

  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  

  const [error, setError] = useState('');

  // next need to do handleChange 

  const handleChange = (e) => {
    let itemToChange = e.target.name
    console.log(itemToChange);
    setFormData({
      ...formData,
      [formData.itemToChange]: e.target.value,
    });
    console.log(formData.email);
    console.log(formData.password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // send login request to the server
      const response = axios.post('http://localhost:8084/api/users/login', formData)
      .then((response) => {
        console.log("Setting user data using response: " + response.data);
        setUserData({
        token: response.data.token,
        user: response.data.user,
        })
        console.log("Storing in local");
        localStorage.setItem("auth-token", response.data.token)
        console.log("Pushing to gameplay");
        router.push('/gameplay');
      }).catch((response) => {
        // set a "Show error message here"
        console.log("Caught an error. Probably incorrect password or username");
        alert("Incorrect password and/or username")
      });
      //console.log("SetUserData ran");
      // Store the authentication in local storage
      
      //console.log(response.json());
      //console.log("Starting setUserData");
      
      
    } catch (err) {
      console.log('Login Failed:', err.message);
      // handle login error
    }
  }

  
  const handleEmail = (event) => {
    setEmail(event.target.value);
    
    console.log(email);

  }

  useEffect(() => {
    console.log("Email Updated");
    setEmail(email);
    setPass(password);
    setFormData({
      email: email,
      password: password,
    })
  }, [email])

  useEffect(() => {
    console.log("Password Updated");
    setEmail(email);
    setPass(password);
    setFormData({
      email: email,
      password: password,
    })
  }, [password])

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
          id="password"
          value={password}
          onChange={handlePass}
        />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
