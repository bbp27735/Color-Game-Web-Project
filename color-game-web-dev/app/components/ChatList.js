'use client'
import React, { useState } from 'react';
import Chat from './Chat';
import './ChatList.css';

const ChatBar = (props) => {

    const listOfChats = [{
        username: "Debug",
        message: "Hello World!"
    }]

    const [chats, setChats] = useState(listOfChats);

    const handleChats = (enteredChatData) => {
        const chatData = {
        ...enteredUserData,
        id : Math.random().toString(),
      
        }

        if (chatData.name != '' && chatData.message != '') {
          setChats([...chats, chatData])
        }  
    }



    // might need a key value on the list li
    // need a chat send button
    return (
        <div>
            <ul>
                {chats.map((chat) => 
                    <Chat name={chat.name} message={chat.message} />
               )}
            </ul>
         
        </div>
    )


}

export default chatBar;