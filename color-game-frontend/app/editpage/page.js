'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TopBar from "../components/TopBar"
import Card from "../components/UI/Card"
import Button from "../components/Button";
import "../components/Pages/Page.css"


export default function EditPage() {
  // must make a router
  const router = useRouter();
  // then we can use a router where if we recieve working code, we can then..
  // well, move the user to a correct page!

  const [picLink, setPic] = useState('');

  const handlePicture = (e) => {
    setPic(e.target.value);
}

const [message, setMessage] = useState('');

const handleMessage = (e) => {
  setMessage(e.target.value);
}

const handleChange = async (e) => {
   setMessage('');
   setPic('');
}
    

  return (
    <section className="profilePicContainer">
        {/* TopBar */}
        <TopBar />

        <h1>
            Edit your message.
        </h1>

        {/* Profile pic buttons */}
        <div>
        <Card className="input">
            <form onSubmit={handleChange}>
                <label>Profile Picture for the Message</label>
                <input
                id="piclink"
                value={picLink}
                onChange={handlePicture}
                />
                <label>Message</label>
                <input
                id="message"
                value={message}
                onChange={handleMessage}
                />
            <Button type="submit">Submit Edit</Button>
            </form>
        </Card>
        </div>
    </section>
);

  }