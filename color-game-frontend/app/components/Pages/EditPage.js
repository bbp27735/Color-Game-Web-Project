'use client'
import React, { useState, useEffect, useContext } from 'react';
import TopBar from "../TopBar";
import Card from "../UI/Card";
// import { useRouter } from 'next/navigation';
import axios from 'axios';
import Button from "../Button";
import UserContext from '../../context/UserContext';
import ProfilePicButton from '../ProfilePicButton';
import "./Page.css";

const EditChatPage = () => {
    const { userData, setUserData } = useContext(UserContext);

    const [message, setMessage] = useState('');



    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    
    useEffect(() => {
        setMessage(message)

    }, [message])
    

    const handleChange = async (e) => {
        /*
        console.log('Userdata id: ', userData.user.id);
        //console.log('Userdata image: ' , userData.user.image);
        //console.log('Userdata username: ', userData.user.user);
        e.preventDefault();
        console.log("PicLink: " + picLink);
        try {
            let newUserImage = {
                ...userData.user,
                image: picLink
            }
            setPic('');
            console.log("Updating chat...");
            console.log('newUserImage:', newUserImage);
            let linkToUpdate = 'http://localhost:8084/api/users/' + userData.user.id;
            console.log(linkToUpdate);
            const response = axios.put(linkToUpdate, newUserImage)
            .then((response) => {
                setUserData({
                    token: userData.token,
                    user: response.data.user,
            })
            console.log("userData image set");
            }).catch((err) => {
                console.log("Update failed: " + err.message);
            });
        } catch (err) {
            console.log('Update Failed:', err.message);
        }
        */

    }

    return (
        <section>
            <div>
                <TopBar />
            </div>
            <div>
                <Card className="input">
                    <h1>Enter the new message</h1>
                <form onSubmit={handleChange}>
                    <label>New Message</label>
                    <input
                    id="message"
                    value={message}
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