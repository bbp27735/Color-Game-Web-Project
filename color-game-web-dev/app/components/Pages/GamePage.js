'use client'
import React, { useState } from 'react';
import TopBar from "../TopBar";
import TeamButton from "../TeamButton"
import GameButton from "../GameButton"


const GamePage = () => {

    const [currentTeam, setCurrentTeam] = useState('red');

    const changeTeamBlue = (team) => {
        //  onPick={changeTeamBlue}
        console.log("blue");
        setCurrentTeam('blue');
    }
    
    const changeTeamRed = (team) => {
        //  onPick={changeTeamRed}
        console.log("red");
        setCurrentTeam('red');
        
    }
    



    return (
        <div>
            <TopBar />
            <div>
            <TeamButton />
            <TeamButton />
            </div>
            <div>
            <GameButton team={currentTeam}/>
            </div>
        </div>
    );
}

export default GamePage;