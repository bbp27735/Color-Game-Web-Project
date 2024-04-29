'use client'
import React, { useState, userData, useContext } from 'react';
import UserContext from '../context/UserContext';
import ChatCard from './ChatCard';
import Button from './Button';
import './AddChat.css';



const AddChat = (props) => {

  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [profilepic, setProfilePic] = useState('')

  const { userData, setUserData } = useContext(UserContext);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }


  const submitHandler = (event) => {
    event.preventDefault();

    const username = userData.user.username;
    const img = userData.user.image;

    const chatData = {
      username: username,
      message: message,
      img: img,
    }

    props.onSendChat(chatData);

    setMessage('')    

  }


  return (
    <ChatCard className="input">
      <form class="chat-form" onSubmit={submitHandler}>
        <h1>Team Chat</h1>
        <label>Message</label>
        <input
          id="message"
          value={message}
          onChange={handleMessage}
        />
        <Button type="submit">Send</Button>
        
      </form>
    </ChatCard>
  );
};

export default AddChat;
