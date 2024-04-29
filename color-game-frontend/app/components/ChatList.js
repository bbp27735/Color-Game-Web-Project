'use client'
import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Chat from './Chat';
import './ChatList.css';
import AddChat from "./AddChat"
import axios from 'axios';

const ChatList = (props) => {

    /*
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
    */
    const [chats, setChats] = useState([]);

    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        // Fetch chat data from the API
        axios.get('http://localhost:8084/api/chats')
            .then(function (response) {
                const jsonData = response.data;
                const formattedData = jsonData.map(function(item) {
                    return {
                        id: item._id,
                        username: item.username,
                        message: item.chatContent,
                        image: item.image
                    };
                });
                setChats(formattedData); // Update the state with fetched data
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

/*  const handleChats = (enteredChatData) => {
        console.log('Userdata ID:', userData.user.id);
        console.log('Userdata username:', userData.user.username);
        const chatData = {
        ...enteredChatData,
        id : Math.random().toString(),
        }

        // if (chatData.username != '' && chatData.message != '') {
        //   setChats([...chats, chatData])
        // }        
        
        if (chatData.username !== '' && chatData.message !== '') {
            // Create a new array with the new chat data and the current chats
            let updatedChats = [...chats, chatData];
    
            // Remove oldest chat if chats array length exceeds 5
            if (updatedChats.length > 5) {
                updatedChats.shift(); // Remove the first item (oldest chat)
            }
    
            setChats(updatedChats);
        }
    }
    */
    const handleChats = (enteredChatData) => {
        console.log('Userdata ID:', userData.user.id);
        console.log('Userdata username:', userData.user.username);
        const chatData = {
        ...enteredChatData,
        //id : Math.random().toString(),
        }

        // if (chatData.username != '' && chatData.message != '') {
        //   setChats([...chats, chatData])
        // }        
        
        if (chatData.username !== '' && chatData.message !== '') {
            // Create a new array with the new chat data and the current chats
            let updatedChats = [...chats, chatData];
    
            // Remove oldest chat if chats array length exceeds 5
            if (updatedChats.length > 5) {
                updatedChats.shift(); // Remove the first item (oldest chat)
            }
    
            setChats(updatedChats);
        }

        // Send the chat data to the API
        axios.post('http://localhost:8084/api/chats/add', {
            username: chatData.username,
            chatContent: chatData.message,
            image: chatData.image
        })
            .then(function (response) {
                console.log("Trying post");
                console.log(response);
            })
            .catch(function (error) {
                console.log("Post error");
                console.log(error);
            });
    }


    const handleDeleteChat = (chatID) => {
        console.log("Deleting chat with ID: " + chatID);
        // Validate if the current user's username matches the username associated with the chat message
        if (userData.user.username === chats.find(chat => chat.id === chatID)?.username) {
            axios.delete(`http://localhost:8084/api/chats/${chatID}`)
                .then(function (response) {
                    console.log(response);
                    // Update the chat list after successful deletion
                    const updatedChats = chats.filter(chat => chat.id !== chatID);
                    setChats(updatedChats);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("User does not have permission to delete this chat message.");
        }
    };
    
    


    // might need a key value on the list li
    // need a chat send button
    return (
        <div className="chatDiv">
        <div className="chat-ul">
            {chats.map((chat) => 
                <Chat key={chat.id} image ={chat.image} username={chat.username} message={chat.message} onDelete={() => handleDeleteChat(chat.id)} />
            )}
                
        </div>

        {userData.token ? (
					<AddChat onSendChat={handleChats}/>
				) : (
					<h1>YOU ARE NOT LOGGED IN</h1>
                )}

        
        </div>
    )


}

export default ChatList;