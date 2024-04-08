'use client'
import React, { useState } from 'react';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"

const ChatBar = (props) => {

    const listOfChats = [{
        username: "Debug",
        message: "Hello World!"
    }]

    const [chats, setChats] = useState(listOfChats);

    const handleChats = (enteredChatData) => {
        const chatData = {
        ...enteredChatData,
        id : Math.random().toString(),
      
        }

        if (chatData.username != '' && chatData.message != '') {
          setChats([...chats, chatData])
        }  
    }



    // might need a key value on the list li
    // need a chat send button
    return (
        <div>
            <ul class="chat-ul">
                {chats.map((chat) => 
                    <Chat key={chat.id} username={chat.username} message={chat.message} />
               )}
            </ul>
                <AddChat onSendChat={handleChats}/>
        </div>
    )


}

export default ChatBar;