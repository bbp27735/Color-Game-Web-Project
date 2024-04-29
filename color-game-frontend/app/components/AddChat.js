'use client'
import React, { useState, userData, useContext } from 'react';
import UserContext from '../context/UserContext';
import ChatCard from './ChatCard';
import Button from './Button';
import './AddChat.css';
import axios from 'axios';



const AddChat = (props) => {

  const axios = require('axios');

  const [username, setUsername] = useState('')
  const [chatContent, setMessage] = useState('')
  const [profilepic, setProfilePic] = useState('')

  const { userData, setUserData } = useContext(UserContext);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const username = userData.user.username;
    const image = userData.user.image;

    console.log('IMAGE:', image);

    const chatData = {
      username: username,
      chatContent: chatContent,
      image: image,
    }

    props.onSendChat(chatData);

    setMessage('')

        try {

          console.log("Chat data: ", chatData)
          const chat = await axios.post('http://localhost:8084/api/chats/add', chatData);
          
        } catch (err) {
            console.log('Update Failed:', err.message);
        }

  }


  return (
    <ChatCard className="input">
      <form class="chat-form" onSubmit={submitHandler}>
        <h1>Team Chat</h1>
        <label>Message</label>
        <input
          id="message"
          value={chatContent}
          onChange={handleMessage}
        />
        <Button type="submit">Send</Button>
        
      </form>
    </ChatCard>
  );
};

export default AddChat;
