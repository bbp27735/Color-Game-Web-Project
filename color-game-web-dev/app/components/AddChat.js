'use client'
import React, { useState } from 'react';
import ChatCard from './ChatCard';
import Button from './Button';
import './AddChat.css';



const AddChat = (props) => {

  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [profilepic, setProfilePic] = useState('')

  const handleUsername = (event) => {
    setUsername(event.target.value);

  }

  const handleProfilePic = (event) => {
    setProfilePic(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }


  const submitHandler = (event) => {
    event.preventDefault();
    const chatData = {
      username: username,
      message: message,
      img: profilepic,
    }
    console.log(chatData);
    props.onSendChat(chatData);

    setUsername('')
    setMessage('')
    setProfilePic('')



  }


  return (
    <ChatCard className="input">
      <form class="chat-form" onSubmit={submitHandler}>
        <h1>Team Chat</h1>
        <label>Username</label>
        <input
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <label>Message</label>
        <input
          id="message"
          value={message}
          onChange={handleMessage}
        />
        <label>Profile Picture</label>
        <input
          id="profilepic"
          value={profilepic}
          onChange={handleProfilePic}
        />
        <Button type="submit">Send</Button>
        
      </form>
    </ChatCard>
  );
};

export default AddChat;
