'use client'
import React, { useState } from 'react';
import TopBar from "./TopBar";
import ScoreButton from "./ScoreButton"
import './GameButton.css'


const GameButton = (props) => {

    // const [teamType, setTeam] = useState(props.team);
    let teamType = props.team;
    const [redValue, setRed] = useState(0);
    const [blueValue, setBlue] = useState(0);

    const [amount, setAmount] = useState(0, 0, 0);

    const changeAmount = () => {
        console.log("Team: " + teamType);
        if (teamType == "Red" && blueValue == 0) {
            setRed(redValue + 1);
        } else if (teamType == "Red" && blueValue != 0) {
            setBlue(blueValue - 1);
        } else if (teamType == "Blue" && redValue == 0) {
            setBlue(blueValue + 1);
        } else {
            setRed(redValue - 1);
        }
        console.log("Red Value: " + redValue);

        if (redValue == 254) {
            props.onWin('Red');
            setRed(0);
            setBlue(0);
        } else if (blueValue == 254) {
            props.onWin('Blue');
            setRed(0);
            setBlue(0);
        }
        

        console.log("Red value: " + redValue + " Blue value: " + blueValue);
    }

    const printType = "Welcome to " + teamType;
    const currentRBVal = "Red Value: " + redValue + " Blue Value: " + blueValue;
    const teamClass = "game-button-h3-" + teamType;
    
    return (
        <ScoreButton onClick={changeAmount} class="game-button">
            <h3 className={teamClass}>{printType}</h3>
            <h3 className='game-button-h3'>Click here!!</h3>
            <h3 className='game-button-h3'>{currentRBVal}</h3>
            <h3 className='game-button-h3'>Get to 255 to win!</h3>
        </ScoreButton>
    );
}

export default GameButton;