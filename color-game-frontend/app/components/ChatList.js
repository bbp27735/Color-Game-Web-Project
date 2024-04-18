'use client'
import React, { useState } from 'react';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"

const ChatList = (props) => {

    const listOfChats = [{
        id: 1,
        username: "Debug",
        message: "Hello World!",
        img: "https://i.pinimg.com/564x/f0/e2/3e/f0e23e83f07e9da8f8ded461b4284504.jpg"
    },
    {
        id: 2,
        username: "Mario",
        message: "Wahooo",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
    },
    {
        id: 3,
        username: "Stitch",
        message: "Ohana",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/1200px-Stitch_%28Lilo_%26_Stitch%29.svg.png"
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

    const handleDeleteChat = (chatID) => {
        setChats(chats.filter(chat => chat.id !== chatID));
    }


    // might need a key value on the list li
    // need a chat send button
    return (
        <div className="chatDiv">
        <div className="chat-ul">
            {chats.map((chat) => 
                <Chat key={chat.id} img ={chat.img} username={chat.username} message={chat.message} onDelete={() => handleDeleteChat(chat.id)} />
            )}
                
        </div>
        <AddChat onSendChat={handleChats}/>
        </div>
    )


}

export default ChatList;