'use client'
import React, { useState } from 'react';
import TopBar from "../TopBar";
import TeamButton from "../TeamButton"
import GameButton from "../GameButton"
import ChatList from "../ChatList"
import Score from "../Score"
import './Page.css'
import LogoutButton from '../LogoutButton'


const GamePage = (props) => {

    const [currentTeam, setCurrentTeam] = useState('Blue');


    const changeTeamBlue = (team) => {
        //  onPick={changeTeamBlue}
        setCurrentTeam('Blue');
    }
    
    const handleLogout = () => { 
        console.log("Logout button clicked")
        setLoggedIn(false);
    }


    const changeTeamRed = (team) => {
        //  onPick={changeTeamRed}

        setCurrentTeam('Red');
        
    }

    const [isLoggedIn, setLoginState] = useState(props.loginState)
    
    const blueName = "Blue";
    const redName = "Red";

    const [blueWins, setBlueWin] = useState(0);
    const [redWins, setRedWin] = useState(0);

    const handleTeamChange = (teamGiven) => {
        console.log("Recieved color in GamePage:" + teamGiven)
        if (teamGiven == "Blue") {
            changeTeamBlue(teamGiven);
        } else {
            changeTeamRed(teamGiven);
        }
    }

    const changeLoginState = (loggedIn) => {
        if (loggedIn) {
            setLoginState(false);
        } else {
            setLoginState(true);
        }
    }

    const changeRedWins = () => {
        setRedWin(redWins + 1);
    }

    const changeBlueWins = () => {
        setBlueWin(blueWins + 1);
    }

    const handleLoginChange = (isLoggedIn) => {
        changeLoginState(isLoggedIn);
        console.log("handleLogInChange in GamePage worked");
        props.changeLogInTotal(isLoggedIn);
    }



    const handleWin = (teamWin) => {
        alert("Congrats to team " + teamWin + " for winning the round!");
        if (teamWin == 'Blue') {
            changeBlueWins();
        } else {
            changeRedWins();
        }
        console.log("Red Wins: " + redWins)
        console.log("Blue Wins: " + blueWins)
    }

    return (
        <div>
            <TopBar />
            <div id="button_block">
            <TeamButton changeTeam={handleTeamChange} team={blueName}/>
            <GameButton onWin={handleWin} team={currentTeam}/>
            <TeamButton changeTeam={handleTeamChange} team={redName}/>
            </div>
            <div id="horizontal-stack">
                <div>
                  <ChatList />
                </div>
                <div>
                    <Score blueWin={blueWins} redWin={redWins}></Score>
                </div>
            </div>

        </div>
    );
}

export default GamePage;