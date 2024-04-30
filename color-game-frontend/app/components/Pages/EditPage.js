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
    // console.log('chatData looks like this!: ', chatData);
    const messageToUse = 'http://localhost:8084/api/chats/' + chatData.id
    // console.log(messageToUse);
    const [editMessage, setMessage] = useState(''); // new

    const [ originalChat, setChat ] = useState({ // original
        _id: chatData.id, 
        username: undefined, 
        chatContent: chatData.message, 
        image: undefined,
    });
    /*
    axios.get(messageToUse)
    .then((response) => {
        console.log(response);
        originalChat = (response.data);
    }).catch((response) => {
        alert("Message not found! Returning to gameplay...");
        router.push('/gameplay');
    });
    */

    

    
    
    const handleMessage = (e) => {
        setMessage(e.target.value);
        /*
        axios.get(messageToUse)
        .then((response) => {
            console.log('response in useEffect: ', response);
            setChat(response.data);
            console.log('original chat in useEffect: ', originalChat);
        }).catch((response) => {
            console.log(response);
        });
        */
    }
    
    /*
    useEffect(() => {
        axios.get(messageToUse)
        .then((response) => {
            console.log('response in useEffect: ', response);
            setChat(response.data);
            console.log('original chat in useEffect: ', originalChat);
        }).catch((response) => {
            console.log(response);
        });
        console.log(originalChat);
        setMessage(editMessage);

    }, [editMessage])
    */
    
    
    
    

    const handleChange = async (e) => {
        
        e.preventDefault();
        try {
            let linkToUpdate = 'http://localhost:8084/api/chats/' + chatData.id;
            // console.log(linkToUpdate);
            
            /*const responseOne = axios.get(linkToUpdate).then((response) => {
                console.log(response.data);
                console.log(response);
                setChat()
            })
            */
            axios.get(messageToUse)
            .then((response) => {
                //console.log('response: ', response.data);
                setChat(response.data);
                // console.log('original chat after setChat: ', originalChat);
            }).catch((response) => {
                console.log(response);
            });
           
            let newChatMessage = {
                ...originalChat,
                chatContent: editMessage,
            }
            setMessage('');
            // console.log('Updating chat with...', newChatMessage);

            const response = axios.put(linkToUpdate, newChatMessage)
            .then((response) => {
                // console.log('response in the .put ', response);
                console.log("Message updated successfully.");
                alert("Saved! You can now go to the GamePage!");
                
            
            }).catch((err) => {
                console.log("Message not updated.");
                console.log("Update failed: " + err.message);
            });
            // setTimeout(5000);
            // router.push('/gameplay');
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
                        <h3 className="colourbutBritish">Old message: {originalChat.chatContent}</h3>
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