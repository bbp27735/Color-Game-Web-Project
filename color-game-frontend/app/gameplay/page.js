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


    

  return (
    <section>
      <div>

         <GamePage/>

      </div>
    </section>
  );
}
