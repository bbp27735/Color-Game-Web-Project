'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Login from "../components/Login"
import Topbar from "../components/TopBar"
import LoginPage from '../components/Pages/LoginPage';
import UserContext from '../context/UserContext';


export default function LoginLink() {
  // must make a router
  const router = useRouter();
  // then we can use a router where if we recieve working code, we can then..
  // well, move the user to a correct page!
  const loginHandler = (loginInfo) => {
    console.log("Inside page.js, logininfo!");
    console.log(loginInfo);
    console.log("Name: " + loginInfo.name);

    if(loginInfo.name != '') {
      
      router.push('/gameplay')
    }

  }

  return (
    <section>
      <div>

         <LoginPage onLoginInfoSubmit={loginHandler} />
         
      </div>
    </section>
  );
}
