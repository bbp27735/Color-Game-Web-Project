'use client'
import React, { useState } from 'react';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"

const ChatBar = (props) => {

    const listOfChats = [
        {
            username: "Debug",
            message: "Hello World!",
            img: "https://i.pinimg.com/564x/f0/e2/3e/f0e23e83f07e9da8f8ded461b4284504.jpg"
        },
        {
            username: "Mario",
            message: "Wahooo",
            img: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        },
        {
            username: "Stitch",
            message: "Ohana",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/1200px-Stitch_%28Lilo_%26_Stitch%29.svg.png"
        }
    ]

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
                    <Chat key={chat.id} username={chat.username} message={chat.message} img={chat.img} />
               )}
            </ul>
                <AddChat onSendChat={handleChats}/>
        </div>
    )


}

export default ChatBar;