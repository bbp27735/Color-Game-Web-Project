'use client'
import React, { useState } from 'react';
import TopBar from '../TopBar';
import Login from '../Login';
import Link from 'next/link'
import './Page.css';



export default function LoginPage(props) {

    const [isLoggedIn, setLoginState] = useState(true);

    const loginDataHandler = (loginInfo) => {
        console.log("Login to the page when credentials are entered: " + loginInfo)
        console.log("Attempt to change page" + loginInfo.name);
        console.log(loginInfo.pass);
        loginInfo = {
            ...loginInfo,
            isLoggedIn: isLoggedIn
        }

        props.onLoginInfoSubmit(loginInfo);
        

    }
    return (
        <div>
            <TopBar />
            <h1 id="login_welcome">Welcome to Square Game!</h1>            
            <Login onSaveUserData={loginDataHandler}/>
            <Link id="link_to_login_signup" href='signup'>Sign Up</Link>
        </div>
    );
  }

  // need to pass in Login function