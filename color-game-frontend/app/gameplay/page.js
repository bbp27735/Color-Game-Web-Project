'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TopBar from "../components/TopBar"
import GamePage from "../components/Pages/GamePage"
import StatsPage from "../components/Pages/StatsPage"
import LoginPage from '../components/Pages/LoginPage';

export default function Game() {
  // must make a router
  const router = useRouter();
  // then we can use a router where if we recieve working code, we can then..
  // well, move the user to a correct page!

  const [loginState, setLoginState] = useState(true);

  const loginHandle = (loginState) => {
    setLoginState(loginState);
    console.log("LoginState in page.js: " + loginState);

    setTimeout(() => {
      router.push('/login');
    }, 5000);
    

  }
  if (loginState == true) {
  return (
    <section>
      <div>

         <GamePage changeLogInTotal={loginHandle} loginState={loginState}/>

      </div>
    </section>
  );
  } else {
    return (
      <section>
        <div>
          <TopBar />
          <h1>User is not logged in</h1>
          <h2>Redirecting to Login page in 5 seconds...</h2>
        </div>
      </section>
    )
  }
}
