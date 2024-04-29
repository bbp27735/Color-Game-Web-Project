'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Login from "../components/Login"
import Topbar from "../components/TopBar"
import EditPage from '../components/Pages/EditPage';
import UserContext from '../context/UserContext';


export default function EditLink() {
  // must make a router
  const router = useRouter();
  // then we can use a router where if we recieve working code, we can then..
  // well, move the user to a correct page!
  

  return (
    <section>
      <div>

         <EditPage />
         
      </div>
    </section>
  );
}
