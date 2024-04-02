'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Topbar from "../components/TopBar"

import SignupPage from '../components/Pages/SignupPage';

export default function SignUpLink() {
  // must make a router
  const router = useRouter();
  // then we can use a router where if we recieve working code, we can then..
  // well, move the user to a correct page!



  return (
    <section>
      <div>

         <SignupPage />

      </div>
    </section>
  );
}