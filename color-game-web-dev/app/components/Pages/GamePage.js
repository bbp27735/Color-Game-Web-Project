'use client'
import React, { useState } from 'react';
import TopBar from "../TopBar";
import TeamButton from "../TeamButton"
import GameButton from "../GameButton"
import ChatBar from "../ChatList"
import './Page.css'


const GamePage = () => {

    const [currentTeam, setCurrentTeam] = useState('Blue');

    const changeTeamBlue = (team) => {
        //  onPick={changeTeamBlue}
        setCurrentTeam('Blue');
    }
    
    const changeTeamRed = (team) => {
        //  onPick={changeTeamRed}

        setCurrentTeam('Red');
        
    }
    
    const blueName = "Blue";
    const redName = "Red";

    const handleTeamChange = (teamGiven) => {
        console.log("Recieved color in GamePage:" + teamGiven)
        if (teamGiven == "Blue") {
            changeTeamBlue(teamGiven);
        } else {
            changeTeamRed(teamGiven);
        }
    }

    return (
        <div>
            <TopBar />
            <div id="button_block">
            <TeamButton changeTeam={handleTeamChange} team={blueName}/>
            <GameButton team={currentTeam}/>
            <TeamButton changeTeam={handleTeamChange} team={redName}/>
            </div>
            <div>
            </div>
            <div>
                <ChatBar />
            </div>
        </div>
    );
}

export default GamePage;