'use client'
import React, { useState, useEffect, useContext } from 'react';
import TopBar from "../TopBar";
import Card from "../UI/Card";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Button from "../Button";
import ChatContext from '../../context/ChatContext'
import UserContext from '../../context/UserContext';
import ProfilePicButton from '../ProfilePicButton';
import { ChatProvider } from '../../context/ChatContext';
import "./Page.css";

const EditChatPage = (props) => {

    const router = useRouter();
    const { chatData, setChatData } = useContext(ChatContext);
    const { userData, setUserData } = useContext(UserContext);
    //console.log('INSIDE OF EDIT PAGE CHAT DATA: ', chatData);
    //console.log(chatData);
    const messageToUse = 'http://localhost:8084/api/chats/' + chatData
    //console.log(messageToUse);
    const [fullChat, setFullChat] = useState('');
    axios.get(messageToUse)
    .then((response) => {
        setFullChat(response.data);
    }).catch((response) => {
        alert("Message not found! Returning to gameplay...");
        router.push('/gameplay');
    });

    const [editMessage, setMessage] = useState('');

    
    
    const handleMessage = (e) => {

        setMessage(e.target.value);
    }
    
    /*
    useEffect(() => {
        console.log(fullChat);
        setMessage(editMessage);

    }, [editMessage])
    */
    
    

    const handleChange = async (e) => {
        
        e.preventDefault();
        try {
            let newChatMessage = {
                ...fullChat,
                chatContent: editMessage,
            }
            setMessage('');
            console.log("Updating chat...");
            let linkToUpdate = 'http://localhost:8084/api/chats/' + chatData;
            console.log(linkToUpdate);
            const response = axios.put(linkToUpdate, newChatMessage)
            .then((response) => {
                console.log("Message updated successfully.");
                router.push('/gameplay')
            
            }).catch((err) => {
                alert("Message not updated.");
                console.log("Update failed: " + err.message);
            });
        } catch (err) {
            console.log('Update Failed:', err.message);
        }
        

    }

    return (
        <section>
            <div>
                <TopBar />
            </div>
            <div>
                    <Card className="input">
                        <h1>Enter the new message</h1>
                        <h2>Current Message:</h2>
                        <h2>{fullChat.chatContent}</h2>
                    <form onSubmit={handleChange}>
                        <label>New Message</label>
                        <input
                        id="message"
                        value={editMessage}
                        onChange={handleMessage}
                        />
                    <Button type="submit">Update Message</Button>
                    </form>
                    </Card>
            </div>
        </section>
    );
};

export default EditChatPage;