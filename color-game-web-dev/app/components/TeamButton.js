'use client'
import React, { useState } from 'react';
import TopBar from "./TopBar";
import TeamButtonFormat from "./UI/TeamButtonFormat";
import './TeamButton.css';


const TeamButton = (props) => {

    const classStart = 'circle';
    const teamToUse = props.team;
    
    const [classes, setTeam] = useState(classStart + teamToUse);

    const handleClick = () => {
        const teamToGive = teamToUse;
        props.changeTeam(teamToGive);
        console.log("Passed color from TeamButton to handleClick (most likely in GamePage")
    }
    

    return (
        <div>
            <TeamButtonFormat team={teamToUse} onClick={handleClick} >(Team Button) + {classes}</TeamButtonFormat>
        </div>
    );
}

export default TeamButton;